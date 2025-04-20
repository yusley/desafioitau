import { PrismaClient } from '@prisma/client'

export interface InterfacePrismaDataBaseClient {
  getClient(): Promise<PrismaClient>
}

class PrismaDataBaseClient implements InterfacePrismaDataBaseClient {
  private prismaClient = new PrismaClient()

  async getClient(): Promise<PrismaClient> {
    return this.prismaClient
  }
}

export { PrismaDataBaseClient }
