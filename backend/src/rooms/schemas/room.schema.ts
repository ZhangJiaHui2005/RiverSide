import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Room extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  pricePerNight: number;

  @Prop({ default: [] })
  images: string[];

  @Prop({ default: true })
  isAvailable: boolean;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
