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
	ligo compile storage ./contract/main.jsligo '$(shell cat ./contract/default_storage.txt)' -o ./artifacts/$(NAME)_default_storage.tz

deploy:
	./scripts/deploy.sh $(USERNAME) $(NAME) ./artifacts/$(NAME).tz ./artifacts/$(NAME)_default_storage.tz
