import { IApplicationState } from "../../app/features";
import { login } from "../../app/features/user/userAction";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Loader from "../loader/Loader";

const User = () => {
  const dispach = useAppDispatch();
  const userState = useAppSelector((state: IApplicationState) => {
    return state.user;
  });

  const handleEthConnect = () => {
    if (process.env.PRIVATE_KEY) {
      dispach(login(process.env.PRIVATE_KEY));
    }
  };

  return (
    <>
      <Loader isLoading={userState.loading === "pending"}>
        {userState.isLogedIn ? (
          <div>
            <span>Adress: {userState.user?.address}</span>
          </div>
        ) : (
          <button
            onClick={handleEthConnect}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Connect Eth Wallet
          </button>
        )}
      </Loader>
    </>
  );
};

export default User;
