import { OpenAI } from "langchain/llms";
import * as dotenv from "dotenv";
dotenv.config();
if( ! process.env.OPENAI_API_KEY ){
    throw new Error("Missing OPENAI_API_KEY environment variable");
}
export const run = async () => {
    const model = new OpenAI({ temperature: 0.9,modelName:"text-ada-001" });
    const res = await model.call(
        "What would be a good company name for a cat that can fly?"
    );
    console.log({ res });
};

run();
