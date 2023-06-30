## MAKEFILE ##

USERNAME		=	LeTamanoirDev
RPC_URL			=	https://ghostnet.tezos.marigold.dev/

MAIN 			=	./contract/main.jsligo
STORAGE			=	./contract/default_storage.jsligo

NAME			=	ameno

config:
	./scripts/config.sh $(USERNAME) $(RPC_URL)

compile:
	ligo compile contract $(MAIN) -o ./artifacts/$(NAME).tz
	./scripts/storage.sh

deploy:
	./scripts/deploy.sh $(USERNAME) $(NAME) ./artifacts/$(NAME).tz ./artifacts/$(NAME)_default_storage.tz
