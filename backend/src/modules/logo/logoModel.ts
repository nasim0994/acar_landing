import { model, Schema } from 'mongoose';
import { ILogo } from './logoInterface';

const logoSchema = new Schema<ILogo>({
  logo: {
    type: String,
    required: true,
  },
});

export const Logo = model<ILogo>('Logo', logoSchema);
