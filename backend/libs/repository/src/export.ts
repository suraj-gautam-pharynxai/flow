import { ChunkingServiceRepository } from "./services/chunkingService"
import { RawServiceRepository } from "./services/rawTextService"
import { BotServiceRepository } from "./services/botService"
import { ScrapperServiceRepository } from "./services/scrapper"
import { LlmBotServiceRepository } from "./services/llmBotService"
import { NlpBotServiceRepository } from "./services/nlpBotService"
import { EmbeddingServiceRepository } from "./services/embeddingService"
import { ImageCaptionServiceRepository } from "./services/imageCaptioning"
import { AuthServiceRepository } from "./services/authService"
import { PhoneticRepository } from "./services/phoneticService"
import { PdfParserService } from "./services/parser"
import { EmbedServiceRepository } from "./services/embedService"




export const Repositories = [
    ...BotServiceRepository.Repositories,
    ...ScrapperServiceRepository.Repositories,
    ...RawServiceRepository.Repositories,
    ...ChunkingServiceRepository.Repositories,
    ...EmbeddingServiceRepository.Repositories,
    ...LlmBotServiceRepository.Repositories,
    ...NlpBotServiceRepository.Repositories,
    ...ImageCaptionServiceRepository.Repositories,
    ...AuthServiceRepository.Repositories,
    ...PhoneticRepository.Repositories,
    ...PdfParserService.Repositories,
    ...EmbedServiceRepository.Repositories
]

export const Entities = [
    ...RawServiceRepository.Entities,
    ...BotServiceRepository.Entities,
    ...ScrapperServiceRepository.Entities,
    ...ChunkingServiceRepository.Entities,
    ...LlmBotServiceRepository.Entities,
    ...NlpBotServiceRepository.Entities,
    ...EmbeddingServiceRepository.Entities,
    ...ImageCaptionServiceRepository.Entities,
    ...AuthServiceRepository.Entities,
    ...PhoneticRepository.Entities,
    ...PdfParserService.Entities,
    ...EmbedServiceRepository.Entities
]

export const Schemas = [
    // ...RawServiceRepository.Schemas
]