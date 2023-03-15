export type GetEdge<T extends { edges: unknown[] }> = T["edges"][number];
export type GetNode<T extends { edges: { node: unknown }[] }> = GetEdge<T>["node"];

type Contravariant<T> = T extends unknown ? (_: T) => void : never;
type InferContravariant<T> = [T] extends [(_: infer I) => void] ? I : never;
type PickOne<T> = InferContravariant<InferContravariant<Contravariant<Contravariant<T>>>>;
export type UnionToTuple<T> = PickOne<T> extends infer U
  ? Exclude<T, U> extends never
    ? [T]
    : [...UnionToTuple<Exclude<T, U>>, U]
  : never;
