import { model, Schema } from 'mongoose';
import { IBusiness } from './businessInterface';

const businessSchema = new Schema<IBusiness>({
  companyName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  whatsapp: {
    type: String,
    required: true,
  },
  facebook: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  shipping: {
    insideDhaka: {
      type: Number,
      required: true,
    },
    outsideDhaka: {
      type: Number,
      required: true,
    },
  },
});

export const Business = model<IBusiness>('Business', businessSchema);
