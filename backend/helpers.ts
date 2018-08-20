export interface Context {
  user?: { id: string };
}

const createContext = (userId: string): Context => {
  const context: Context = {};
  return context;
};
