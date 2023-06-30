## MAKEFILE ##

USERNAME		=	LeTamanoirDev
RPC_URL			=	https://ghostnet.tezos.marigold.dev/

INITIAL_STORAGE	=	"(Pair (Pair (Pair {} {}) {} {}) 0)"


SRC 			=	./contract/main.jsligo

NAME			=	ameno
MODULE_NAME		=	ameno

config:
	./scripts/config.sh $(USERNAME) $(RPC_URL)

compile:
	ligo compile contract $(SRC) -m $(MODULE_NAME) > ./artifacts/$(NAME).tz

deploy:
	./scripts/deploy.sh $(USERNAME) $(NAME) ./artifacts/$(NAME).tz $(INITIAL_STORAGE)
