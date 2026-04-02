import { isUserAdult } from "./isUserAdult";
import { formatUserName } from "./formatUserName";

export default function UserProfile({ user }) {
  const name = formatUserName(user);
  const adult = isUserAdult(user);

  return <div>{name} - {adult ? "Adult" : "Minor"}</div>;
}
