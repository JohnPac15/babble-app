import React from "react";
import { io } from "socket.io-client";

export const socket = io("http://localhost");
export const SocketContext = React.createContext();