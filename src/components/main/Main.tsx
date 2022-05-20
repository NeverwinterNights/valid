import React from 'react';
import style from './Main.module.css';
import {CopyIcon} from "../icons/copy/CopyIcon";

export const Main = React.memo(() => {


    return (
        <>
            <h1>79anvi</h1>
            <h2>Stake now with me!</h2>
            <div className={style.wrapper}>
                <div className={style.block}>
                    <div className={style.title}>IXO</div>
                    <div className={style.link}>Explorer</div>
                    <div title="Copy address to clipboard">
                        <span className={style.hash}>ixovaloper1680a2sy8z63cxczjl34xpzusv4es7yrn6y4f5x</span>
                        <CopyIcon value={"ixovaloper1680a2sy8z63cxczjl34xpzusv4es7yrn6y4f5x"}/>
                    </div>
                </div>
                <div className={style.block}>
                    <div className={style.title}>Gravity Bridge</div>
                    <div className={style.link}>Explorer</div>
                    <div title="Copy address to clipboard">
                        <span className={style.hash}>gravityvaloper18u9pws4989n7fmx5pduev7starj8wqgg4jcxr3 </span>
                        <CopyIcon value={"gravityvaloper18u9pws4989n7fmx5pduev7starj8wqgg4jcxr3"}/>
                    </div>
                </div>
                <div className={style.block}>
                    <div className={style.title}>Rizon</div>
                    <div className={style.link}>Explorer</div>
                    <div title="Copy address to clipboard">
                        <span className={style.hash}>rizonvaloper1gke47wnpdnqqspju5xe5448gxmz36vt8fksjmc</span>
                        <CopyIcon value={"rizonvaloper1gke47wnpdnqqspju5xe5448gxmz36vt8fksjmc"}/>
                    </div>
                </div>
                <div className={style.block}>
                    <div className={style.title}>Ki-Chain</div>
                    <div className={style.link}>Explorer</div>
                    <div title="Copy address to clipboard">
                        <span className={style.hash}>kivaloper1mfr64h8rmnlg2g90m6qk3zw80vgxmuumq0ng9x </span>
                        <CopyIcon value={"kivaloper1mfr64h8rmnlg2g90m6qk3zw80vgxmuumq0ng9x"}/>
                    </div>
                </div>
                <div className={style.block}>
                    <div className={style.title}>Bitsong</div>
                    <div className={style.link}>Explorer</div>
                    <div title="Copy address to clipboard">
                        <span className={style.hash}>bitsongvaloper13g02l4y2es8ppls7ar5zh58ldre8q7tsv6kqer</span>
                        <CopyIcon value={"bitsongvaloper13g02l4y2es8ppls7ar5zh58ldre8q7tsv6kqer"}/>
                    </div>
                </div>
                <div className={style.block}>
                    <div className={style.title}>Chihuahua</div>
                    <div className={style.link}>Explorer</div>
                    <div title="Copy address to clipboard">
                        <span className={style.hash}>galaxyvaloper1qeln3m90f3p0erclyyczspeeeujslcxy3kqe3k</span>
                        <CopyIcon value={"galaxyvaloper1qeln3m90f3p0erclyyczspeeeujslcxy3kqe3k"}/>
                    </div>
                </div>
                <div className={style.block}>
                    <div className={style.title}>AssetMantle</div>
                    <div className={style.link}>Explorer</div>
                    <div title="Copy address to clipboard">
                        <span className={style.hash}>mantlevaloper1ppvfpcp7grhgpkvse4rk877ysuztg73r04y68z</span>
                        <CopyIcon value={"mantlevaloper1ppvfpcp7grhgpkvse4rk877ysuztg73r04y68z"}/>
                    </div>
                </div>
                <div className={style.block}>
                    <div className={style.title}>Nomic</div>
                    <div className={style.link}>Explorer</div>
                    <div title="Copy address to clipboard">
                        <span className={style.hash}>nomic1m3v4485x3hld5vxthx6xcnx7y7l6l8kxgejh6v</span>
                        <CopyIcon value={"nomic1m3v4485x3hld5vxthx6xcnx7y7l6l8kxgejh6v"}/>
                    </div>
                </div>
                <div className={style.block}>
                    <div className={style.title}>Galaxy</div>
                    <div className={style.link}>Explorer</div>
                    <div title="Copy address to clipboard">
                        <span className={style.hash}>galaxyvaloper1qeln3m90f3p0erclyyczspeeeujslcxy3kqe3k</span>
                        <CopyIcon value={"galaxyvaloper1qeln3m90f3p0erclyyczspeeeujslcxy3kqe3k"}/>
                    </div>
                </div>
            </div>
            <h2>Testnets</h2>
            <div className={style.wrapper}>
                <div className={style.block}>
                    <div className={style.title}>Klever</div>
                    <div className={style.link}>Explorer</div>
                </div>
                <div className={style.block}>
                    <div className={style.title}>Uptick</div>
                    <div className={style.link}>Explorer</div>
                </div>
                <div className={style.block}>
                    <div className={style.title}>Defund</div>
                    <div className={style.link}>Explorer</div>
                </div>
                <div className={style.block}>
                    <div className={style.title}>Quicksilver</div>
                    <div className={style.link}>Explorer</div>
                </div>
                <div className={style.block}>
                    <div className={style.title}>Stafi Hub</div>
                    <div className={style.link}>Explorer</div>
                </div>
                <div className={style.block}>
                    <div className={style.title}>DWS</div>
                    <div className={style.link}>Explorer</div>
                </div>
                <div className={style.block}>
                    <div className={style.title}>KYVE</div>
                    <div className={style.link}>Explorer</div>
                </div>
                <div className={style.block}>
                    <div className={style.title}>ANOTHER1</div>
                    <div className={style.link}>Explorer</div>
                </div>
                <div className={style.block}>
                    <div className={style.title}>And other</div>
                    <div className={style.link}>Kira, Massa, Meson, Minima, Aptos, Subspace, Humanode</div>
                </div>

            </div>
        </>
    );
});

