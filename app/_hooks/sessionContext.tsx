import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";

type SessionContextType = {
  session: Session;
  signin: IdVoidFunction;
  signout: VoidFunction;
};

enum ActionType {
  SIGNIN = "signin",
  SIGNOUT = "signout",
}

type ActionPayloadType =
  | {
      type: ActionType.SIGNIN;
      payload: Session;
    }
  | { type: ActionType.SIGNOUT; payload?: null };

const SessionContext = createContext<SessionContextType>({
  session: { user: null },
  signin: (id) => {},
  signout: () => {},
});

const reducer = (session: Session, { type, payload }: ActionPayloadType) => {
  switch (type) {
    case ActionType.SIGNIN:
      return { ...payload };
    case ActionType.SIGNOUT:
      return { user: null };
    default:
      return session;
  }
};

const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, dispatch] = useReducer(reducer, { user: null });

  const signin = async (id: number) => {
    const data = {
      user: null,
    };
    try {
      const res = await fetch(`${process.env.SERVER}/users/${id}`);
      const data = await res.json();
    } catch (error) {
      console.error(error);
    }
    dispatch({ type: ActionType.SIGNIN, payload: data });
  };

  const signout = () => dispatch({ type: ActionType.SIGNOUT });

  return (
    <SessionContext.Provider value={{ session, signin, signout }}>
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => useContext(SessionContext);

export { SessionProvider, useSession };
