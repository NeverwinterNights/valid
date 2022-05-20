import React, {ChangeEvent, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import style from './Info.module.css';

type  StateType = {
    defundd?: string
    defund?: string
    name?: string
    network?: string
    wallet?: string
    ufetf?: string
    peers?: string
    seeds?: string
    pruning1?: string
    pruning2?: string
    pruning3?: string
    a1?: string
    a2?: string
    a3?: string
    a4?: string
    c1?: string
    c2?: string
    c3?: string
    c4?: string
    c5?: string
    defundvaloper1ms?: string
}

export const Info = React.memo(() => {

    const initialState = {
        defundd: "",
        defund: "",
        name: "",
        network: "",
        wallet: "",
        ufetf: "",
        peers: "",
        seeds: "",
        pruning1: "100",
        pruning2: "0",
        pruning3: "10",
        a1: "",
        a2: "",
        a3: "",
        a4: "",
        c1: "",
        c2: "",
        c3: "",
        c4: "",
        c5: "",
        defundvaloper1ms: "",
    }


    const [state, setState] = useState<StateType>(initialState);
    const onSubmit: SubmitHandler<StateType> = (data) => {
    }

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if (value && /^[a-zA-Z0-9]+$/.test(value)) {
            setState({
                ...state,
                [name]: value
            })
        } else {
            setState({
                ...state,
                [name]: ""
            })
        }
    }

    const inputHandlerNumbers6 = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if (value && /^\d+$/.test(value) && value.length <= 6) {
            setState({
                ...state,
                [name]: value
            })
        } else {
            setState({
                ...state,
                [name]: ""
            })
        }
    }

    const inputHandlerNumbers2 = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if (value && /^\d+$/.test(value) && value.length <= 2) {
            setState({
                ...state,
                [name]: value
            })
        } else {
            setState({
                ...state,
                [name]: ""
            })
        }
    }
    const inputHandlerNumbers4 = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if (value && /^\d+$/.test(value) && value.length <= 4) {
            setState({
                ...state,
                [name]: value
            })
        } else {
            setState({
                ...state,
                [name]: ""
            })
        }
    }

    const inputHandlerNumbers5 = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if (value && /^\d+$/.test(value) && value.length <= 5) {
            setState({
                ...state,
                [name]: value
            })
        } else {
            setState({
                ...state,
                [name]: ""
            })
        }
    }
    const inputHandlerReg = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if ( /^[a-z0-9,:@]*$/.test(value)) {
            setState({
                ...state,
                [name]: value
            })
        } else {
            setState({
                ...state,
                [name]: ""
            })
        }
    }



    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: 'onChange'
    });


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.row}>
                    <span>ИМЯ_КОМАНДНОГО_ФАЙЛА</span>
                    <input {...register("defundd", {
                        pattern: {
                            value: /^[a-zA-Z0-9]+$/,
                            message: ('Поле может состоять только  латинские символы и цифры.')
                        }
                    })} onInput={inputHandler} value={state.defundd}/>
                    {errors.defundd && <div style={{color: "red"}}>{errors.defundd.message}</div>}
                </div>


                <div className={style.row}>
                    <span>ИМЯ_ДОМАШНЕГО_КАТАЛОГА</span>

                    <input {...register("defund", {
                        pattern: {
                            value: /^[a-zA-Z0-9]+$/,
                            message: ('Поле может состоять только  латинские символы и цифры.')
                        }
                    })} onInput={inputHandler} value={state.defund}/>
                    {errors.defund && <div style={{color: "red"}}>{errors.defund.message}</div>}


                </div>
                <div className={style.row}>
                    <span>ИМЯ_НОДЫ</span>
                    <input {...register("name", {
                        pattern: {
                            value: /^[a-zA-Z0-9]+$/,
                            message: ('Поле может состоять только  латинские символы и цифры.')
                        }
                    })} onInput={inputHandler} value={state.name}/>
                    {errors.name && <div style={{color: "red"}}>{errors.name.message}</div>}

                </div>
                <div className={style.row}>
                    <span>НАЗВАНИЕ КОШЕЛЬКА</span>
                    <input  {...register("wallet", {
                        pattern: {
                            value: /^[a-zA-Z0-9]+$/,
                            message: ('Поле может состоять только  латинские символы и цифры.')
                        }
                    })} onInput={inputHandler} value={state.wallet}/>
                    {errors.wallet && <div style={{color: "red"}}>{errors.wallet.message}</div>}

                </div>
                <div className={style.row}>
                    <span>ИМЯ_СЕТИ</span>
                    <input {...register("network", {
                        pattern: {
                            value: /^[a-zA-Z0-9]+$/,
                            message: ('Поле может состоять только  латинские символы и цифры.')
                        }
                    })} onInput={inputHandler} value={state.network}/>
                    {errors.network && <div style={{color: "red"}}>{errors.network.message}</div>}

                </div>
                <div className={style.row}>
                    <span>ИМЯ_ДЕНОМА</span>
                    <input {...register("ufetf", {
                        pattern: {
                            value: /^[a-zA-Z0-9]+$/,
                            message: ('Поле может состоять только  латинские символы и цифры.')
                        }
                    })} onInput={inputHandler} value={state.ufetf}/>
                    {errors.ufetf && <div style={{color: "red"}}>{errors.ufetf.message}</div>}

                </div>

                <div className={style.row}>
                    <span>ПРУНИНГ </span>
                    <input className={style.number} {...register("pruning1", {
                        minLength: {
                            value: 6,
                            message: "Поле может состоять только  из шести цифр"
                        },
                        maxLength: {
                            value: 6,
                            message: "Поле может состоять только  из шести цифр"
                        },
                        pattern: {
                            value: /^\d+$/,
                            message: ('Поле может состоять только  из пяти цифр.')
                        }
                    })} onInput={inputHandlerNumbers6} value={state.pruning1} name="pruning1"/>


                    <input className={style.number} {...register("pruning2", {
                        minLength: {
                            value: 2,
                            message: "Поле может состоять только  из двух цифр"
                        },
                        maxLength: {
                            value: 2,
                            message: "Поле может состоять только  из двух цифр"
                        },
                        pattern: {
                            value: /^\d+$/,
                            message: ('Поле может состоять только  из двух цифр.')
                        }
                    })} onInput={inputHandlerNumbers2} value={state.pruning2} name="pruning2"/>


                    <input className={style.number} {...register("pruning3", {
                        minLength: {
                            value: 4,
                            message: "Поле может состоять только  из четырех цифр"
                        },
                        maxLength: {
                            value: 4,
                            message: "Поле может состоять только  из четырех цифр"
                        },
                        pattern: {
                            value: /^\d+$/,
                            message: ('Поле может состоять только  из четырех цифр.')
                        }
                    })} onInput={inputHandlerNumbers4} value={state.pruning3} name="pruning3"/>
                    {errors.pruning1 && <div style={{color: "red"}}>{errors.pruning1.message}</div> ||
                    errors.pruning2 && <div style={{color: "red"}}>{errors.pruning2.message}</div> ||
                    errors.pruning3 && <div style={{color: "red"}}>{errors.pruning3.message}</div>
                    }

                </div>
                <div className={style.row}>
                    <span>peers</span>

                    <input  {...register("peers", {
                        pattern: {
                            value: /^[a-z0-9,:@]*$/,
                            message: ('Поле может состоять только  из  цифр, запятой, двоеточия и @.')
                        }
                    })} onInput={inputHandlerReg} value={state.peers}/>
                    {errors.peers && <div style={{color: "red"}}>{errors.peers.message}</div>}
                </div>
                <div className={style.row}>
                    <span>seeds</span>
                    <input {...register("seeds", {
                        pattern: {
                            value: /^[a-z0-9,:@]*$/,
                            message: ('Поле может состоять только  из  цифр, букв, запятой, двоеточия и @.')
                        }
                    })} onInput={inputHandlerReg}  value={state.seeds}/>
                    {errors.seeds && <div style={{color: "red"}}>{errors.seeds.message}</div>}
                </div>




                <div className={style.row}>app.toml: 1317
                    <input className={style.smallImp} {...register("a1", {
                        minLength: {
                            value: 2,
                            message: "Поле может состоять только  из пяти цифр"
                        },
                        maxLength: {
                            value: 5,
                            message: "Поле может состоять только  из пяти цифр"
                        },
                        pattern: {
                            value: /^\d+$/,
                            message: ('Поле может состоять только  из пяти цифр.')
                        }
                    })} onInput={inputHandlerNumbers5} value={state.a1}/>, 8080

                    <input className={style.smallImp}  {...register("a2", {
                        minLength: {
                            value: 2,
                            message: "Поле может состоять только  из пяти цифр"
                        },
                        maxLength: {
                            value: 5,
                            message: "Поле может состоять только  из пяти цифр"
                        },
                        pattern: {
                            value: /^\d+$/,
                            message: ('Поле может состоять только  из пяти цифр.')
                        }
                    })} onInput={inputHandlerNumbers5} value={state.a2}/>, 9090
                    <input className={style.smallImp} {...register("a3", {
                        minLength: {
                            value: 2,
                            message: "Поле может состоять только  из пяти цифр"
                        },
                        maxLength: {
                            value: 5,
                            message: "Поле может состоять только  из пяти цифр"
                        },
                        pattern: {
                            value: /^\d+$/,
                            message: ('Поле может состоять только  из пяти цифр.')
                        }
                    })} onInput={inputHandlerNumbers5} value={state.a3}/>, 9091
                    <input className={style.smallImp} {...register("a4", {
                        minLength: {
                            value: 5,
                            message: "Поле может состоять только  из пяти цифр"
                        },
                        maxLength: {
                            value: 2,
                            message: "Поле может состоять только  из пяти цифр"
                        },
                        pattern: {
                            value: /^\d+$/,
                            message: ('Поле может состоять только  из пяти цифр.')
                        }
                    })} onInput={inputHandlerNumbers5} value={state.a4}/></div>
                {errors.a1 && <div style={{color: "red"}}>{errors.a1.message}</div> ||
                errors.a2 && <div style={{color: "red"}}>{errors.a2.message}</div> ||
                errors.a3 && <div style={{color: "red"}}>{errors.a3.message}</div> ||
                errors.a4 && <div style={{color: "red"}}>{errors.a4.message}</div>
                }


                <div className={style.row}>config.toml: 26658
                    <input className={style.smallImp} {...register("c1", {
                        minLength: {
                            value: 2,
                            message: "Поле может состоять только  из пяти цифр"
                        },
                        maxLength: {
                            value: 5,
                            message: "Поле может состоять только  из пяти цифр"
                        },
                        pattern: {
                            value: /^\d+$/,
                            message: ('Поле может состоять только  из пяти цифр.')
                        }
                    })} onInput={inputHandlerNumbers5} value={state.c1}/>, 26657
                    <input className={style.smallImp} {...register("c2", {
                        minLength: {
                            value: 2,
                            message: "Поле может состоять только  из пяти цифр"
                        },
                        maxLength: {
                            value: 5,
                            message: "Поле может состоять только  из пяти цифр"
                        },
                        pattern: {
                            value: /^\d+$/,
                            message: ('Поле может состоять только  из пяти цифр.')
                        }
                    })} onInput={inputHandlerNumbers5} value={state.c2}/>, 6060
                    <input className={style.smallImp} {...register("c3", {
                        minLength: {
                            value: 2,
                            message: "Поле может состоять только  из пяти цифр"
                        },
                        maxLength: {
                            value: 5,
                            message: "Поле может состоять только  из пяти цифр"
                        },
                        pattern: {
                            value: /^\d+$/,
                            message: ('Поле может состоять только  из пяти цифр.')
                        }
                    })} onInput={inputHandlerNumbers5} value={state.c3}/>, 26656

                    <input className={style.smallImp} {...register("c4", {
                        minLength: {
                            value: 2,
                            message: "Поле может состоять только  из пяти цифр"
                        },
                        maxLength: {
                            value: 5,
                            message: "Поле может состоять только  из пяти цифр"
                        },
                        pattern: {
                            value: /^\d+$/,
                            message: ('Поле может состоять только  из пяти цифр.')
                        }
                    })} onInput={inputHandlerNumbers5} value={state.c4}/>, 26660
                    <input className={style.smallImp} {...register("c5", {
                        minLength: {
                            value: 2,
                            message: "Поле может состоять только  из пяти цифр"
                        },
                        maxLength: {
                            value: 5,
                            message: "Поле может состоять только  из пяти цифр"
                        },
                        pattern: {
                            value: /^\d+$/,
                            message: ('Поле может состоять только  из пяти цифр.')
                        }
                    })} onInput={inputHandlerNumbers5} value={state.c5}/>
                    {errors.c1 && <div style={{color: "red"}}>{errors.c1.message}</div> ||
                    errors.c2 && <div style={{color: "red"}}>{errors.c2.message}</div> ||
                    errors.c3 && <div style={{color: "red"}}>{errors.c3.message}</div> ||
                    errors.c4 && <div style={{color: "red"}}>{errors.c4.message}</div> ||
                    errors.c5 && <div style={{color: "red"}}>{errors.c5.message}</div>
                    }
                </div>
                <div className={style.row}>
                    <span>АДРЕСС_ВАЛИДАТОРА</span>
                    <input {...register("defundvaloper1ms", {
                        pattern: {
                            value: /^[a-zA-Z0-9]+$/,
                            message: ('Поле может состоять только  латинские символы и цифры.')
                        }
                    })} onInput={inputHandler} value={state.defundvaloper1ms}/>
                    {errors.defundvaloper1ms && <div style={{color: "red"}}>{errors.defundvaloper1ms.message}</div>}

                </div>

            </form>
            <div className={"result"}>
                <h3>Инициализируем ноду {state.name}</h3>
                <div>{state.defundd} init {state.name} --chain-id={state.network}</div>


                <h3>Cоздаем или восстанавливаем кошелек и сохраняем вывод</h3>
                <div># создать кошелек</div>
                <div>{state.defundd} keys add {state.wallet}</div>
                <div># восстановить кошелек (после команды вставить seed)</div>
                <div>{state.defundd} keys add {state.wallet} --recover</div>
                <div># если нет, то выполняем команду</div>
                <div>{state.defundd} tendermint unsafe-reset-all</div>
                <h2>Настраиваем конфигурацию ноды</h2>
                <div><strong>Правим конфиг</strong> $HOME/.{state.defund}/config/client.toml</div>
                <div>{state.defundd} config chain-id {state.defund}</div>
                <br/>
                <div><strong>Настраиваем минимальную цену за газ </strong>$HOME/.{state.defund}/config/app.toml</div>
                <div>sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"0.0025{state.ufetf}\"/;"
                    ~/.{state.defund}/config/app.toml
                </div>
                <br/>
                <div><strong>Настраиваем прунинг одной командой</strong> $HOME/.{state.defund}/config/app.toml</div>
                <br/>
                <div>pruning="custom" && \</div>
                <div>{state.pruning1} && \</div>
                <div>{state.pruning2} && \</div>
                <div>{state.pruning3} && \</div>
                <div>sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.{state.defund}/config/app.toml && \
                </div>
                <div>sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/"
                    $HOME/.{state.defund}/config/app.toml && \
                </div>
                <div>sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/"
                    $HOME/.{state.defund}/config/app.toml && \
                </div>
                <div>sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/"
                    $HOME/.{state.defund}/config/app.toml
                </div>
                <br/>
                <div><strong>Добавляем seed/peers</strong> $HOME/.{state.defund}/config/config.toml</div>
                <br/>
                <div>`sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"${state.peers}\"/;
                    s/^{state.seeds} *=.*/{state.seeds} = \"${state.seeds}\"/"
                    $HOME/$PROJECT_CONFIG/config/config.toml`
                </div>
                <br/>
                <div><strong>Выключаем индексацию (опционально)</strong> $HOME/.{state.defund}/config/config.toml
                </div>
                <br/>
                <div>indexer="null" && \</div>
                <div>sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/"</div>
                <div>$HOME/.{state.defund}/config/config.toml</div>
                <br/>

                <div><strong>Создаем сервисный файл</strong></div>
                <br/>
                <div>sudo tee /etc/systemd/system/{state.defundd}.service {'> /dev/null <<EOF'}</div>
                <div>[Unit]</div>
                <div>Description={state.defund}</div>
                <div>After=network-online.target</div>
                <br/>
                <div>[Service]</div>
                <div>User=$USER</div>
                <div>ExecStart=$(which {state.defundd}) start</div>
                <div>Restart=on-failure</div>
                <div>RestartSec=3</div>
                <div>LimitNOFILE=65535</div>
                <br/>
                <div>[Install]</div>
                <div>WantedBy=multi-user.target</div>
                <div>EOF</div>
                <br/>
                <div>sudo systemctl daemon-reload && \</div>
                <div>sudo systemctl enable {state.defundd} && \</div>
                <div>sudo systemctl restart {state.defundd} && sudo journalctl -u {state.defundd} -f -o cat</div>
                <br/>
                <h2>Создаем валидатора</h2>
                <br/>
                <div>{state.defundd} tx staking create-validator \</div>
                <div>--chain-id {state.defund}-private-1 \</div>
                <div>--commission-rate=0.1 \</div>
                <div>--commission-max-rate=0.2 \</div>
                <div>--commission-max-change-rate=0.1 \</div>
                <div>--min-self-delegation="1000000" \</div>
                <div>--amount=10000000{state.ufetf} \</div>
                <div>--pubkey $({state.defundd} tendermint show-validator) \</div>
                <div>--moniker {state.name} \</div>
                <div>--from={state.wallet} \</div>
                <div>--gas="auto" \</div>
                <div>--fees 500{state.ufetf}</div>
                <br/>
                <h2>Не забываем сохранить priv_validator_key.json</h2>
                <br/>
                <div>------------------КОМАНДЫ ПОСЛЕ УСТАНОВКИ-----------</div>
                <br/>
                <div>АДРЕСС_ВАЛИДАТОРА={state.defundvaloper1ms}</div>
                <br/>
                <h2>Полезные команды</h2>
                <br/>
                <h3>Проверить блоки</h3>
                <div>{state.defundd} status 2{'>'}&1 {state.c2 && `--node tcp://127.0.0.1:${state.c2}`} | jq ."SyncInfo"."latest_block_height"</div>
                <br/>
                <h3>Проверить логи</h3>
                <br/>
                <div>sudo journalctl -u {state.defundd} -f -o cat</div>
                <div>sudo journalctl -fn 100 -u {state.defundd}</div>
                <br/>
                <h3>Статус (тут меняем только сам порт, если меняют с дефолтного)</h3>
                <div>curl localhost:26657/status</div>
                <br/>
                <h3>Проверить баланс</h3>
                <div>{state.defundd} q bank balances defund1a... {state.c2 && `--node tcp://127.0.0.1:${state.c2}`}</div>
                <br/>
                <h3>Проверить валидатора</h3>
                <br/>
                <div>{state.defundd} query staking validator {state.defundvaloper1ms} N</div>
                <div>{state.defundd} query staking validators {state.c2 && `--node tcp://127.0.0.1:${state.c2}`} --limit 1000000 -o json | jq '.validators[] |
                    select(.description.moniker=={state.name} )' | jq
                </div>
                <h3>Собрать комиссионные + реварды</h3>
                <br/>
                <div>{state.defundd} tx distribution
                    withdraw-rewards {state.defundvaloper1ms} --from {state.wallet} --chain-id {state.defund}-private-1
                    --fees 5{state.ufetf} --commission {state.c2 && `--node tcp://127.0.0.1:${state.c2}`} -y
                </div>
                <br/>
                <h3>Заделегировать себе в стейк еще (так отправляется 1 монетa)</h3>
                <br/>
                <div>{state.defundd} tx staking
                    delegate {state.defundvaloper1ms} 1000000{state.ufetf} --from {state.wallet} --fees
                    5{state.ufetf} --chain-id {state.defund}-private-1 {state.c2 && `--node tcp://127.0.0.1:${state.c2}`} -y
                </div>
                <br/>
                <h3>Unbond (в примере 10 монет)</h3>
                <br/>
                <div>{state.defundd} tx staking unbond {state.defundvaloper1ms} 10000000{state.ufetf}
                    --from {state.wallet} --fees 5{state.ufetf} --chain-id {state.defund}-private-1 {state.c2 && `--node tcp://127.0.0.1:${state.c2}`} -y
                </div>
                <br/>
                <h3>Отправить монеты на другой адрес</h3>
                <div>{state.defundd} tx bank send {state.wallet} {state.defundvaloper1ms} 1001000{state.ufetf} --fees
                    5{state.ufetf} --chain-id {state.defund}-private-1 {state.c2 && `--node tcp://127.0.0.1:${state.c2}`} -y
                </div>
                <br/>
                <h3>Выбраться из тюрьмы</h3>
                <div>{state.defundd} tx slashing unjail --from {state.wallet} N</div>
                <br/>
                <h3>Список кошельков</h3>
                <div>{state.defundd} keys list</div>
                <br/>
                <h3>Узнать транзакцию создания валидатора (заменить свой valoper_address)</h3>
                <div>{state.defundd} query txs --events='create_validator.validator={'<your_valoper_address>'}' -o=json
                    | jq .txs[0].txhash -r
                </div>
                <br/>
                <h3>Проверить сколько блоков пропущено валидатором и с какого блока актив</h3>
                <div>{state.defundd} q slashing signing-info $({state.defundd} tendermint show-validator)</div>
                <br/>
                <h3>Параметры сети</h3>
                <br/>
                <div>{state.defundd} q staking params</div>
                <br/>
                <h3>Проголосовать за предложение </h3>
                <div>{state.defundd} tx gov vote 1 yes --from {state.wallet} --fees 555{state.ufetf} N</div>
                <br/>
                <h3>Внести депозит в предложение</h3>
                <br/>
                <div>{state.defundd} tx gov deposit 1 1000000{state.ufetf} --from {state.wallet} --fees
                    555{state.ufetf}</div>
                <br/>
                <h3>Explorer</h3>
                <br/>
                <div>{state.defundd} q staking validators -oj {state.c2 && `--node tcp://127.0.0.1:${state.c2}`} --limit=3000 | jq '.validators[] |
                    select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " \t
                    " + .description.{state.name}' | sort -gr | nl
                </div>
            </div>
        </div>
    );
});


