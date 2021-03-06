import { Tag } from '../../domain/tag/tag'
import { ITagsRepository } from '../ITagsRepository'

export class InMemoryTagsRepository implements ITagsRepository {
  constructor(public items: Tag[] = []) {}

  async exists(title: string): Promise<boolean> {
    return this.items.some(tag => tag.title.value === title)
  }

  async findById(id: string): Promise<Tag> {
    return this.items.find(tag => tag.id === id)
  }

  async findManyByIds(ids: string[]): Promise<Tag[]> {
    return this.items.filter(tag => ids.includes(tag.id))
  }

  async findByTitle(title: string): Promise<Tag> {
    return this.items.find(tag => tag.title.value === title)
  }

  async save(tag: Tag): Promise<void> {
    const tagIndex = this.items.findIndex(findTag => findTag.id === tag.id)

    this.items[tagIndex] = tag
  }

  async create(tag: Tag): Promise<void> {
    this.items.push(tag)
  }
}
