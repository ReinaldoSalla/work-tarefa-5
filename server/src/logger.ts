import * as winston from 'winston';
import * as fs from "fs";
import { join } from "path";
import Calendar from "./utils/calendar";
import { negotiationsLogsDir } from "./properties";

export const negotiationLogger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { 
        service: 'test-service',
        datetime: Calendar.convertToBrStandard(new Date)
    },
    transports: [
        new winston.transports.File({
            filename: negotiationsLogsDir,
            maxsize: 100000,
            maxFiles: 10
        })
    ]
});
