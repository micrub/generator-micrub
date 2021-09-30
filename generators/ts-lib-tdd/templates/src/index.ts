import debug from 'debug';

const d = debug(process.env.npm_package_name);
d("Hlo!");

export default function() {
  return "hlo";
}
