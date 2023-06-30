ligo compile storage ./contract/main.jsligo "{
    administrators: Set.literal(
      list([\"tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb\" as address])
    ) as set<address>,
    offers: Map.empty as map<[address, nat], { quantity: nat, price: nat }>,
    ledger: Big_map.empty as MULTIASSET.Ledger.t,
    metadata: Big_map.empty as MULTIASSET.Metadata.t,
    token_metadata: Big_map.empty as MULTIASSET.TokenMetadata.t,
    operators: Big_map.empty as MULTIASSET.Operators.t,
    owner_token_ids: Set.empty as
      set<[MULTIASSET.Storage.owner, MULTIASSET.Storage.token_id]>,
    token_ids: Set.empty as set<MULTIASSET.Storage.token_id>
  }" -o ./artifacts/ameno_default_storage.tz
