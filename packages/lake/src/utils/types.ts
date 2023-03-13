export type GetEdge<T extends { edges: unknown[] }> = T["edges"][number];
export type GetNode<T extends { edges: { node: unknown }[] }> = GetEdge<T>["node"];
