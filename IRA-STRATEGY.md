# IRA Trading Strategy — Final Spec (Verified Mar 1, 2026)

## Strategy: Breakout + Holy Grail

**Backtest: $10K → $26,923 (+169.2%) over 5 years | SPY: +76.1% | Alpha: +93.1%**
**Max DD: -11.1% | Win Rate: 48% | R:R 2.6:1 | 30 trades/yr (~2.5/mo)**

---

## Position Rules
- **Account:** IRA only (0% tax)
- **Max positions:** 2 concurrent
- **Position size:** 35% of total capital each
- **Max deployed:** 70% (always 30%+ cash)
- **Min allocation:** $200

## Entry Signals (detected after market close)

### Breakout Entry
ALL must be true:
1. Close > highest high of last 20 days
2. Volume > 1.5× 20-day average volume
3. 9 EMA > 21 EMA > 50 SMA (MA alignment)
4. Close > 200 SMA (uptrend)
5. 50 SMA > 200 SMA (golden cross)
6. ADX(14) > 15

### Holy Grail Entry
ALL must be true:
1. Price pulls back to touch 21 EMA (low within 0.5% of 21 EMA, or low ≤ 21 EMA ≤ close)
2. Close > 21 EMA (bounce confirmed)
3. Close > prior day's close (momentum)
4. ADX(14) > 30 (strong trend required)
5. 9 EMA > 21 EMA > 50 SMA (MA alignment)
6. Close > 200 SMA, 50 SMA > 200 SMA

### Execution
- **Signal detected:** After 1:00 PM PT close, scanner runs
- **Order placed:** Market-on-Open (MOO) or market order before 6:30 AM PT
- **Entry price:** Next trading day's OPEN

## Stop Loss

### Initial Stop
- **Formula:** Entry price − (3 × ATR14)
- Set as GTC stop-loss order immediately after fill
- ATR is from signal day (known before entry)

### Trailing Stop (manual daily update)
- **Days 1–10:** Trail with 13 EMA (update stop if 13 EMA > current stop)
- **Days 11+:** Trail with 21 EMA (update stop if 21 EMA > current stop)
- Stop only ratchets UP, never down
- **Check once daily after close (~1:05 PM PT)**

### Gap-Through
- If stock opens below stop → exit at OPEN price (market order)
- Do NOT wait for stop order to fill at stale price

## Exit Rules (in priority order)
1. **Trailing stop hit** — intraday or gap-through
2. **Time stop** — Day 10+, if close < entry price → sell at close
3. **Trend death** — Day 10+, if ADX drops below 15 → sell at close
4. **No profit target** — let winners run via trailing stop

## Universe (34 tickers)

| Sector | Tickers |
|--------|---------|
| Tech/AI | NVDA, AMD, AVGO, SMH, AAPL, MSFT, GOOGL, AMZN, META, CRM, SNOW, PLTR, NFLX |
| Crypto-adjacent | MSTR, COIN, MARA, RIOT, SOFI |
| Gold/Silver | GLD, GDX, SLV, NEM |
| Industrial | CAT, VMC, URI |
| Housing | DHI, LEN |
| Uranium | URA, CCJ |
| Energy | UNG, LNG |
| Index ETFs | QQQ, IWM |
| (excluded) | SPY (used as market filter only) |

## Scaling

| IRA Size | Per Position (35%) | 5yr Projected | Max DD $ |
|----------|-------------------|---------------|----------|
| $10,000 | $3,500 | $26,923 | $1,109 |
| $25,000 | $8,750 | $67,307 | $2,771 |
| $50,000 | $17,500 | $134,614 | $5,543 |
| $100,000 | $35,000 | $269,229 | $11,086 |

## Yearly Backtest (2021–2026, next-day-open, all bugs fixed)

| Year | Trades | W/L | Win% | Return | Notes |
|------|--------|-----|------|--------|-------|
| 2021 | 4 | 2/2 | 50% | -0.5% | Few signals (late start) |
| 2022 | 22 | 10/12 | 45% | -2.9% | Bear market, SPY -20% |
| 2023 | 35 | 19/16 | 54% | +33.8% | Recovery |
| 2024 | 52 | 23/29 | 44% | +44.4% | Best year |
| 2025 | 34 | 16/18 | 47% | +39.1% | Strong |
| 2026 | 5 | 3/2 | 60% | +4.8% | YTD (Jan–Feb) |

## Daily Routine

1. **After close (~1:05 PM PT):** Scanner sends signal alert via Telegram
2. **If signal:** Place MOO order before next open (1 min)
3. **Update trailing stops** on open positions via broker (3 min)
4. **Time/trend check:** If day 10+ and losing → sell at close

**Total: ~5 min/day when positions are open. Most days: nothing.**

## Known Limitations
1. Survivorship bias (mitigated by ETF-heavy universe)
2. Slippage ~0.3%/trade reduces real returns by ~10% over 5 years
3. 36% of exits are gap-through-stops (psychologically harder)
4. Manual trailing stop updates required daily
5. Works best in trending markets; choppy/sideways will underperform
6. Max 5 consecutive losses observed in backtest

## Taxable Account
**DO NOT run this strategy in a taxable account.**
At 50% short-term tax rate: +169% IRA → +16% taxable. SPY buy-and-hold (+58%) crushes it.
Taxable = SPY or Dual Momentum only.
