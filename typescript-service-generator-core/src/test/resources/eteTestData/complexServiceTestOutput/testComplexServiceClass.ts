// Copyright
// Generated
module ModuleName.TestComplexServiceClass {

    export interface IDataObject {
        y: IMyObject;
    }

    export interface IGenericObject<T> {
        y: T;
    }

    export interface IImmutablesObject {
        y: string;
    }

    export interface IMyObject {
        y: IMyObject;
    }

    export interface ITestComplexServiceClass {
        allOptionsPost(a: string, dataObject: IDataObject, b?: number): FooReturn<IGenericObject<IMyObject>>;
        queryGetter(x?: boolean): FooReturn<IMyObject>;
        simplePut(dataObject: IDataObject): FooReturn<IImmutablesObject>;
    }

    export class TestComplexServiceClassImpl implements ITestComplexServiceClass {

        private httpApiBridge: IHttpApiBridge;
        constructor(httpApiBridge: IHttpApiBridge) {
            this.httpApiBridge = httpApiBridge;
        }

        public allOptionsPost(a: string, dataObject: IDataObject, b?: number) {
            var httpCallData = <IHttpEndpointOptions> {
                serviceIdentifier: "testComplexServiceClass",
                endpointPath: "testComplexService/allOptionsPost/{a}",
                method: "POST",
                mediaType: "application/json",
                requiredHeaders: [],
                pathArguments: [a],
                queryArguments: {
                    b: b,
                },
                data: dataObject
            };
            return this.httpApiBridge.callEndpoint<IGenericObject<IMyObject>>(httpCallData);
        }

        public queryGetter(x?: boolean) {
            var httpCallData = <IHttpEndpointOptions> {
                serviceIdentifier: "testComplexServiceClass",
                endpointPath: "testComplexService/queryGetter",
                method: "GET",
                mediaType: "application/json",
                requiredHeaders: [],
                pathArguments: [],
                queryArguments: {
                    x: x,
                },
                data: null
            };
            return this.httpApiBridge.callEndpoint<IMyObject>(httpCallData);
        }

        public simplePut(dataObject: IDataObject) {
            var httpCallData = <IHttpEndpointOptions> {
                serviceIdentifier: "testComplexServiceClass",
                endpointPath: "testComplexService/simplePut",
                method: "PUT",
                mediaType: "application/json",
                requiredHeaders: [],
                pathArguments: [],
                queryArguments: {
                },
                data: dataObject
            };
            return this.httpApiBridge.callEndpoint<IImmutablesObject>(httpCallData);
        }
    }
}
