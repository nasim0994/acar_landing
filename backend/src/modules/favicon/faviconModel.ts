import { model, Schema } from 'mongoose';
import { IFavicon } from './faviconInterface';

const faviconSchema = new Schema<IFavicon>({
  favicon: {
    type: String,
    required: true,
  },
});

export const Favicon = model<IFavicon>('Favicon', faviconSchema);
