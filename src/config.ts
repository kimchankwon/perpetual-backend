import fs from 'fs';
import { config as dotenvConfig } from 'dotenv';
import path from 'path';

interface Config {
  GENERAL: {
    PORT: number;
    SIMILARITY_MEASURE: string;
  };
  API_KEYS: {
    OPENAI: string;
    GROQ: string;
  };
  API_ENDPOINTS: {
    SEARXNG: string;
    OLLAMA: string;
  };
}

const config: Config {
  GENERAL: {
    PORT: process.env.PORT || '',
    SIMILARITY_MEASURE: process.env.SIMILARITY_MEASURE || '',
  },
  API_KEYS: {
    OPENAI: process.env.OPENAI || '',
    GROQ: process.env.GROQ || '',
  },
  API_ENDPOINTS: {
    SEARXNG: process.env.SEARXNG || '',
    OLLAMA: process.env.OLLAMA || '',
  }
}

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export const getPort = () => config.GENERAL.PORT;

export const getSimilarityMeasure = () =>
  config.GENERAL.SIMILARITY_MEASURE;

export const getOpenaiApiKey = () => config.API_KEYS.OPENAI;

export const getGroqApiKey = () => config.API_KEYS.GROQ;

export const getSearxngApiEndpoint = () => config.API_ENDPOINTS.SEARXNG;

export const getOllamaApiEndpoint = () => config.API_ENDPOINTS.OLLAMA;

export const updateConfig = (config: RecursivePartial<Config>) => {
};
