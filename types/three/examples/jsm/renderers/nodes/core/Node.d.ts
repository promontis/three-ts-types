import NodeBuilder from './NodeBuilder';
import NodeFrame from './NodeFrame';

export class Node {
    type: string;
    updateType: string;
    isNode: boolean;

    constructor(type: string);

    getUpdateType: <TBuilder extends NodeBuilder = NodeBuilder>(builder?: TBuilder) => string;

    getType: <TBuilder extends NodeBuilder = NodeBuilder>(builder?: TBuilder) => string;

    update: <TFrame extends NodeFrame = NodeFrame>(frame?: TFrame) => void;

    generate: <TBuilder extends NodeBuilder = NodeBuilder>(builder?: TBuilder, output?: string) => void | string;

    buildStage: <TBuilder extends NodeBuilder = NodeBuilder>(
        builder: TBuilder,
        shaderStage: string,
        output?: string,
    ) => void;

    build: <TBuilder extends NodeBuilder = NodeBuilder>(builder: TBuilder, output?: string) => void;
}

export default Node;
