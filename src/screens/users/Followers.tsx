import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();
  return (
    <div>
      <h1>Here are {nameOfMyUser} of followers</h1>
    </div>
  );
}
export default Followers;
