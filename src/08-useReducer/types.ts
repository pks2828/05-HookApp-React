// types.ts
export type Todo = {
    id: number;
    done: boolean;
    description: string;
};


export type Action = {
    // Define the properties of an action
    type: string;
    payload?: unknown;
}