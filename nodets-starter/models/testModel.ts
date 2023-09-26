import mongoose, { Schema, Document } from 'mongoose';

interface ITest extends Document {
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const testSchema: Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true
  }
);

const Test = mongoose.model<ITest>('Test', testSchema);

export default Test;
