import { createAsyncThunk } from "@reduxjs/toolkit";
import { connectWallet } from "../../../services/connectEth";
const LOGIN = "LOGIN";

export const login = createAsyncThunk(LOGIN, async (privateKey: string) =>
  connectWallet(privateKey)
);
