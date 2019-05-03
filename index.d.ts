/*---------------------------------------------------------------------------------------------
 *  Copyright (c) No one - this is OSS. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
export declare class WeakTag {
    constructor(info: ObjectInfo);
}

export declare namespace ObjectInfo {
    export interface FinalizedCallback<T extends object = object> {
        (this: ObjectInfo<T>): void;
    }
}

export class ObjectInfo<T extends object = object> {
    constructor(target: T, finalizedCallback: ObjectInfo.FinalizedCallback<T>);

    readonly target: T | undefined;
}
