import {ShaService} from "../src/ShaService";
import {describeHashService} from "./describeHashService";

describeHashService(ShaService.name, new ShaService());
