/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d7c0zutwpoxd6sz")

  collection.createRule = "user = @request.auth.id"
  collection.deleteRule = "user = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d7c0zutwpoxd6sz")

  collection.createRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
