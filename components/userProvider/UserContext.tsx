import * as React from "react";

export interface AppContextInterface {
    name: string;

}



let sampleAppContext: AppContextInterface = {
    name:""

};


export const updateName = (name) => {
    sampleAppContext.name = name;
}

export default sampleAppContext;

const ctxt = React.createContext<AppContextInterface | null>(null);

export const UserContextProvider = ctxt.Provider;

export const UserContextConsume = ctxt.Consumer;
