type RemixManifest = {

};

type Node = {
  name: string;
  children: Node[];
  level: string;
};

type TreeData = {
  name: string;
  children: Node[];
  max: number;
  widthSet: number;
};

export default function layoutParse(remixManifest: RemixManifest): TreeData;
