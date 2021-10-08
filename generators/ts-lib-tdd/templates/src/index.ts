import debug from "debug";
import { name } from "../package.json";

const PACKAGE_NAME =  name  || "UNDETECTED";
const d = debug(PACKAGE_NAME);
d("Hlo!");

export default function() {
  return "hlo";
}
