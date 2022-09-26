interface ILoaderProps {
  isLoading: boolean;
  children: any;
}

const Loader = ({ isLoading, children }: ILoaderProps) => {
  return <>{isLoading ? <div> Loading </div> : <div> {children}</div>}</>;
};

export default Loader;
