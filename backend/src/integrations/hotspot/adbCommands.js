import { exec } from "child_process";
import util from "util";
const execPromise = util.promisify(exec);

export async function adb(cmd) {
  const ADB_PATH = "C:\\Users\\sathv\\Downloads\\platform-tools-latest-windows\\platform-tools\\adb.exe";
  const full = `${ADB_PATH} ${cmd}`;
  const { stdout } = await execPromise(full);
  return stdout;
}
