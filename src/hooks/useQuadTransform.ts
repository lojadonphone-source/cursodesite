import { useEffect, useState, type RefObject } from "react";

export type Point = readonly [number, number];

/** Resolve um sistema linear quadrado pelo método de Gauss-Jordan com pivoteamento parcial. */
function solveSystem(rows: number[][], values: number[]): number[] {
  const size = values.length;
  const augmented = rows.map((row, index) => [...row, values[index]]);

  for (let column = 0; column < size; column++) {
    let pivot = column;
    for (let row = column + 1; row < size; row++) {
      if (Math.abs(augmented[row][column]) > Math.abs(augmented[pivot][column])) pivot = row;
    }
    [augmented[column], augmented[pivot]] = [augmented[pivot], augmented[column]];

    const divisor = augmented[column][column];
    if (divisor === 0) continue;
    for (let c = column; c <= size; c++) augmented[column][c] /= divisor;

    for (let row = 0; row < size; row++) {
      if (row === column) continue;
      const factor = augmented[row][column];
      if (factor === 0) continue;
      for (let c = column; c <= size; c++) augmented[row][c] -= factor * augmented[column][c];
    }
  }

  return augmented.map((row) => row[size]);
}

/**
 * Devolve uma transformação CSS (matrix3d) que leva os quatro cantos do elemento
 * até os quatro pontos de destino informados, permitindo encaixá-lo em uma superfície inclinada.
 */
function buildMatrix3d(width: number, height: number, destination: Point[]): string {
  const source: Point[] = [
    [0, 0],
    [width, 0],
    [width, height],
    [0, height],
  ];
  const rows: number[][] = [];
  const values: number[] = [];

  source.forEach(([x, y], index) => {
    const [u, v] = destination[index];
    rows.push([x, y, 1, 0, 0, 0, -u * x, -u * y]);
    values.push(u);
    rows.push([0, 0, 0, x, y, 1, -v * x, -v * y]);
    values.push(v);
  });

  const [a, b, c, d, e, f, g, h] = solveSystem(rows, values);
  return `matrix3d(${a}, ${d}, 0, ${g}, ${b}, ${e}, 0, ${h}, 0, 0, 1, 0, ${c}, ${f}, 0, 1)`;
}

/**
 * Calcula a transformação de perspectiva do elemento.
 * `corners` são os quatro pontos de destino (topo esquerdo, topo direito, base direita, base esquerdo),
 * em fração do próprio tamanho do elemento. Recalculado quando o elemento é redimensionado.
 */
export function useQuadTransform(ref: RefObject<HTMLElement | null>, corners: Point[]): string {
  const [transform, setTransform] = useState("");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => {
      const width = element.offsetWidth;
      const height = element.offsetHeight;
      if (!width || !height) return;
      setTransform(buildMatrix3d(width, height, corners.map(([x, y]) => [x * width, y * height])));
    };

    update();
    if (typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, corners]);

  return transform;
}
