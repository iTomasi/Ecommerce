import {Strategy, ExtractJwt, StrategyOptions} from "passport-jwt";
import Account from "../models/Account";
import config from "../config/config";

const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.JWT
}

export default new Strategy(opts, async (payload, done) => {
    const user = await Account.findOne({_id: payload.id});

    if (!user) return done(null, false);

    return done(null, payload);
})