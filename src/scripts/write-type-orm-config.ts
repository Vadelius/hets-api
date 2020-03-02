import { configService } from "src/config/config.service";
// eslint-disable-next-line @typescript-eslint/no-require-imports
import fs = require("fs");

fs.writeFileSync("ormconfig.json", JSON.stringify(configService.getTypeOrmConfig(), null, 2));
