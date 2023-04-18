declare interface Node {
  name: string;
  children: Node[];
  level: string;
}

declare interface LayoutData {
  name: string;
  children: Node[];
  max: number;
  widthSet: number;
}

declare function layoutParse(remixManifest: Record<string, unknown>): LayoutData;

export default layoutParse;
