import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import mongoose from 'mongoose';

import environment from './environment.js';
import User from '../models/User.js';

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

function passJWT(passport){
    passport.use(
        new JwtStrategy({ jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() , secretOrKey: environment.secretOrKey }, 
        (jwt_payload, done) => {
            User.findById(jwt_payload.id).then(user => {
                if (user){
                    return done(null, user);
                }
                return done(null, false);
            })
            .catch(err => console.log(err));
        })
    );
};
export default passJWT;
