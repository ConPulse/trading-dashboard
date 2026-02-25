# 📊 MOMENTUM SWING TRADING PLAYBOOK
### Paper Trading System | $10K Capital | 2-10 Day Holds
*Last Updated: 2026-02-24*

---

# PART 1: TECHNICAL INDICATORS MASTERY

## 1. RSI (Relative Strength Index)

**What it measures:** Momentum oscillator (0-100) measuring speed and magnitude of price changes.

**Settings:** Period 14 (default). Use 7 for aggressive/shorter swings, 21 for smoother signals.

**How to read it:**
- **Overbought:** >70 (in strong uptrends, use >80)
- **Oversold:** <30 (in strong downtrends, use <20)
- **Bullish divergence:** Price makes lower low, RSI makes higher low → reversal incoming
- **Bearish divergence:** Price makes higher high, RSI makes lower high → weakness
- **Failure swing (bullish):** RSI drops below 30, bounces, pulls back but stays above 30, then breaks above prior RSI high → strong buy
- **Failure swing (bearish):** RSI rises above 70, drops, rises again but stays below 70, then breaks below prior RSI low → strong sell
- **50-line crossover:** RSI crossing above 50 = bullish momentum shift; below 50 = bearish

**Best timeframes for swing trading:** Daily chart RSI(14), confirm on 4H RSI(14).

**When it works:** Ranging/choppy markets, mean reversion setups.
**When it fails:** Strong trending markets (RSI stays overbought for weeks in bull runs). Don't short just because RSI >70 in a trend.

**Common mistakes:**
- Using RSI alone as buy/sell signal
- Shorting overbought in uptrends
- Not adjusting levels for trending vs ranging markets

**Combine with:** MACD for divergence confirmation, Bollinger Bands for mean reversion, volume for conviction.

---

## 2. MACD (Moving Average Convergence Divergence)

**What it measures:** Trend direction, momentum, and duration. Relationship between two EMAs.

**Settings:** Standard 12, 26, 9. For swing trading, these defaults work well.

**How to read it:**
- **Signal line crossover (bullish):** MACD line crosses above signal line → buy
- **Signal line crossover (bearish):** MACD line crosses below signal line → sell
- **Zero-line cross:** MACD crossing above zero = longer-term bullish shift
- **Histogram:** Bars growing = momentum increasing; shrinking = momentum fading
- **Divergence:** Price makes new high but MACD doesn't → exhaustion warning
- **Histogram divergence:** Most sensitive — histogram making lower highs while price makes higher highs

**Best timeframes:** Daily for swing trade signals. Weekly for trend direction confirmation.

**When it works:** Trending markets, catching momentum shifts early.
**When it fails:** Choppy/sideways markets generate whipsaw crossovers.

**Common mistakes:**
- Trading every crossover in ranging markets
- Ignoring the histogram (it often leads the crossover)
- Not waiting for zero-line confirmation for higher-probability trades

**Decision rule:** Only take MACD buy signals when MACD is below zero and crossing up (catching the turn) OR when above zero with histogram expanding (momentum continuation).

---

## 3. Moving Averages (EMA 9/21/50/200)

**What they measure:** Smoothed price trends over different periods.

**Key EMAs for swing trading:**
| EMA | Role | Use |
|-----|------|-----|
| 9 | Ultra-short trend | Entry timing, trailing stop |
| 21 | Short-term trend | Primary swing trade trend filter |
| 50 | Medium-term trend | Major support/resistance, trend direction |
| 200 | Long-term trend | Bull vs bear market filter |

**Signals:**
- **Golden cross:** 50 EMA crosses above 200 EMA → bullish (lagging but reliable)
- **Death cross:** 50 EMA crosses below 200 EMA → bearish
- **MA ribbon:** When 9 > 21 > 50 > 200 and all sloping up = strong uptrend → buy pullbacks to 21 EMA
- **Slope analysis:** Flat MAs = ranging; steep slope = strong trend. Trade in slope direction only.
- **Price relative to MAs:** Price above 21 EMA = short-term bullish bias

**Best timeframes:** Daily EMAs are the standard for swing trading.

**When it works:** Trending markets; pullback entries to key EMAs.
**When it fails:** Choppy markets where price whipsaws around MAs.

**Decision rules:**
- **Only take longs when price > 21 EMA AND 21 EMA > 50 EMA**
- **Only take shorts when price < 21 EMA AND 21 EMA < 50 EMA**
- Use the 200 EMA as a macro filter: above = bullish environment, below = cautious

---

## 4. Bollinger Bands

**What they measure:** Volatility and relative price levels. Middle band = 20 SMA, upper/lower = ±2 standard deviations.

**Settings:** 20 period, 2 standard deviations (default). Use 1.5 SD for tighter signals.

**Key signals:**
- **Squeeze:** Bands narrow (bandwidth at 6-month low) → big move incoming. Direction unknown — wait for breakout.
- **Breakout:** Price closes outside band with volume → trend continuation (don't fade it)
- **Mean reversion:** Price touches outer band then reverses back toward middle → trade toward 20 SMA
- **Walking the band:** In strong trends, price rides the upper/lower band — this is NOT a reversal signal
- **Bandwidth:** (Upper - Lower) / Middle. Low bandwidth = compression = incoming volatility
- **%B:** (Price - Lower) / (Upper - Lower). >1 = above upper band, <0 = below lower band

**Best timeframes:** Daily for swing setups. The squeeze on daily is powerful.

**When it works:** Mean reversion in ranges; squeeze breakouts for trend entries.
**When it fails:** Don't fade prices "walking the band" in strong trends.

**Decision rules:**
- **Squeeze play:** When Bollinger bandwidth is at 6-month low AND volume is contracting → prepare for breakout entry
- **Mean reversion long:** Price touches lower band + RSI <30 + bullish candle pattern → buy targeting middle band
- **Trend entry:** Price breaks above upper band on 2x average volume → buy, trail stop at middle band

---

## 5. Volume Analysis

**What it measures:** Conviction behind price moves. Price is "what," volume is "how much they mean it."

**Key volume indicators:**

**OBV (On-Balance Volume):**
- Running cumulative total (adds volume on up days, subtracts on down days)
- OBV rising while price flat = accumulation → bullish
- OBV falling while price flat = distribution → bearish
- OBV divergence from price = powerful reversal signal

**VWAP (Volume Weighted Average Price):**
- Institutional fair value benchmark
- Price above VWAP = bullish intraday bias; below = bearish
- For swing trading: use anchored VWAP from key levels (earnings, breakout, etc.)

**Accumulation/Distribution (A/D):**
- Like OBV but weights close position within the bar
- Rising A/D = buying pressure; falling = selling pressure

**Volume rules for swing trading:**
- **Breakout volume:** Must be ≥1.5x 20-day average volume to be valid
- **Pullback volume:** Should decrease (low volume = healthy pullback, not distribution)
- **Climax volume:** Extreme volume spike at top/bottom often marks exhaustion
- **Volume dry-up:** Decreasing volume into a squeeze → breakout imminent

**Decision rules:**
- **Never buy a breakout on below-average volume**
- **Ideal entry:** Breakout on 2x+ volume, pullback on 0.5x volume, continuation on 1.5x+ volume

---

## 6. Stochastic RSI

**What it measures:** RSI of RSI — shows where RSI is relative to its own range. More sensitive than RSI alone.

**Settings:** StochRSI(14, 14, 3, 3) — 14 RSI period, 14 stochastic period, 3 K smoothing, 3 D smoothing.

**How to read it:**
- Oscillates 0-1 (or 0-100)
- **Overbought:** >0.80 | **Oversold:** <0.20
- **Buy signal:** K line crosses above D line below 0.20
- **Sell signal:** K line crosses below D line above 0.80
- More responsive than standard RSI — catches turns earlier but more false signals

**Best timeframes:** Daily for swing, 4H for entry timing.

**When it works:** Catching early reversals in trending pullbacks.
**When it fails:** Very choppy in sideways markets — many false signals.

**Decision rule:** Use StochRSI for entry timing ONLY after trend direction is confirmed by higher timeframe analysis (daily MACD, MAs). Don't trade StochRSI signals in isolation.

---

## 7. ATR (Average True Range)

**What it measures:** Volatility — average range of price movement. NOT directional, just magnitude.

**Settings:** 14 period is standard.

**Uses for swing trading:**

**Stop loss placement:**
- **Initial stop:** Entry price - (2.0 × ATR) for longs
- **Tight stop:** 1.5 × ATR (aggressive, higher chance of stop-out)
- **Wide stop:** 3.0 × ATR (conservative, needs smaller position size)
- **Chandelier stop (trailing):** Highest high since entry - (3 × ATR)

**Position sizing:**
- Risk per trade = Account × Risk% (1-2%)
- Shares = Risk per trade / (ATR × multiplier)
- Example: $10K account, 1.5% risk ($150), ATR = $2, multiplier = 2
- Shares = $150 / ($2 × 2) = 37 shares

**Volatility filter:**
- ATR expanding = trending, good for momentum trades
- ATR contracting = consolidation, prepare for breakout
- Compare current ATR to 20-period average: ATR > avg = volatile; ATR < avg = quiet

**Decision rules:**
- **Always size positions based on ATR.** This normalizes risk across different-priced stocks.
- **Minimum reward target:** 3 × ATR from entry (ensures 1.5:1 R:R with 2 ATR stop)

---

## 8. Fibonacci Retracements

**What they measure:** Potential support/resistance levels based on mathematical ratios.

**Key levels:**
| Level | Use |
|-------|-----|
| 23.6% | Shallow pullback in strong trends |
| 38.2% | First major support — institutional watch level |
| 50.0% | Psychological half-retracement (not a true Fib number but widely used) |
| 61.8% | "Golden ratio" — strongest retracement support |
| 78.6% | Deep pullback — last stand before trend failure |

**Extensions (for targets):**
- 127.2%, 161.8%, 200%, 261.8%
- Use to set profit targets after confirmed breakouts

**How institutions use them:**
- Large funds often place orders at 38.2% and 61.8% retracements
- These levels become self-fulfilling due to widespread use
- Confluence with other support (MA, prior pivot) makes them more powerful

**Best timeframes:** Draw Fibs on daily/weekly for swing trades. The larger the move you measure, the more significant the levels.

**Decision rules:**
- **Best buy zones:** 38.2%-61.8% retracement of the prior leg up, with RSI oversold and volume declining
- **Fib confluence:** When a Fib level aligns with a key EMA (50 EMA at 50% retrace) = high-probability support
- **Invalidation:** If price closes below 78.6% retracement, the prior trend is likely over

---

## 9. Ichimoku Cloud

**What it measures:** Trend direction, support/resistance, and momentum — all in one indicator.

**Components:**
- **Tenkan-sen (Conversion, 9):** Short-term trend
- **Kijun-sen (Base, 26):** Medium-term trend
- **Senkou Span A:** (Tenkan + Kijun) / 2, plotted 26 periods ahead — leading support/resistance
- **Senkou Span B:** (52-period high + low) / 2, plotted 26 periods ahead
- **Cloud (Kumo):** Area between Span A and Span B
- **Chikou Span (Lagging, 26):** Current close plotted 26 periods back

**Signals:**
- **Price above cloud:** Bullish trend → only take longs
- **Price below cloud:** Bearish trend → only take shorts
- **Price in cloud:** No-trade zone (indecision)
- **TK cross (Tenkan crosses Kijun):** Above cloud = strong buy; below cloud = weak buy
- **Cloud twist:** Span A crosses Span B → potential trend change ahead
- **Kumo breakout:** Price breaks out of cloud → new trend direction
- **Flat Kijun:** Acts as magnet; price tends to revert to it

**Best timeframe:** Daily is the classic Ichimoku timeframe (designed for it).

**Decision rules:**
- **Only take longs when price is above the cloud AND Tenkan > Kijun**
- **Cloud as stop reference:** Place stops below the cloud (for longs) — it acts as dynamic support
- **Thick cloud = strong support/resistance; thin cloud = weak (easy to break through)**

---

## 10. ADX (Average Directional Index)

**What it measures:** Trend STRENGTH (not direction). Uses +DI and -DI for direction.

**Settings:** 14 period standard.

**How to read it:**
| ADX Value | Interpretation |
|-----------|---------------|
| 0-20 | Weak/no trend → avoid trend-following, use mean reversion |
| 20-25 | Trend emerging → prepare for entry |
| 25-50 | Strong trend → ride it with momentum strategies |
| 50-75 | Very strong trend → tighten stops, don't add new positions |
| 75-100 | Extreme (rare) → exhaustion likely imminent |

**+DI / -DI:**
- +DI > -DI = bullish trend
- -DI > +DI = bearish trend
- Crossover of +DI above -DI with ADX >20 = buy signal

**Best timeframes:** Daily for swing trading trend filter.

**Decision rules:**
- **Trade momentum strategies when ADX >25**
- **Switch to mean reversion when ADX <20**
- **Best swing entries:** ADX rising from below 20 to above 25 with +DI > -DI (new trend starting)
- **Don't chase:** When ADX >50, the trend may be overextended

---

# PART 2: MULTI-FACTOR CONFIRMATION SYSTEM

## Minimum Confirmations Before Entry: 3 of 5

A high-probability swing trade requires alignment across multiple independent dimensions:

1. **Trend alignment** (MAs, Ichimoku cloud, ADX direction)
2. **Momentum confirmation** (RSI, MACD, StochRSI)
3. **Volume confirmation** (above-average volume, OBV direction)
4. **Key level support** (Fibonacci, Bollinger Band, prior S/R)
5. **Volatility context** (ATR expansion, Bollinger squeeze)

**Require at least 3 of 5 to align. 4 of 5 = high conviction. 5 of 5 = max size.**

## Highest Win-Rate Combinations

| Combo | Win Rate (Approximate) | Best For |
|-------|----------------------|----------|
| EMA alignment + MACD crossover + volume surge | ~60-65% | Trend continuation |
| RSI divergence + Fib support + volume dry-up | ~55-60% | Reversal entries |
| Bollinger squeeze + ADX rising + breakout volume | ~60-65% | Breakout trades |
| Ichimoku cloud breakout + MACD above zero + OBV rising | ~55-60% | Trend initiation |

## Professional Systems

### Elder's Triple Screen System
Three timeframes, three filters:
1. **Screen 1 (Weekly):** Identify trend direction — Weekly MACD histogram slope or 13-week EMA direction
2. **Screen 2 (Daily):** Find pullback — Daily oscillator (Force Index 2-day or Elder-Ray) goes against weekly trend → setup
3. **Screen 3 (Intraday/Entry):** Time entry — Use trailing buy stop above prior day's high (for longs)

**Application to our system:** Use weekly for trend bias, daily for setup, 4H for entry timing.

### Minervini's SEPA (Specific Entry Point Analysis)
Criteria for stock selection (Stage 2 uptrend):
- Price > 150-day (30-week) MA AND > 200-day MA
- 200-day MA trending up for ≥1 month (ideally 4-5 months)
- Price ≥25% above 52-week low
- Price within 25% of 52-week high (closer = better)
- RS rating ≥70 (relative strength vs market)
- Current price above the base/consolidation pattern

**Entry:** Buy on breakout from proper base (VCP — volatility contraction pattern) with volume ≥1.5x average.

### O'Neil's CAN SLIM
- **C** — Current quarterly earnings up ≥25% YoY
- **A** — Annual earnings growth ≥25% over 3 years
- **N** — New product/management/high price
- **S** — Supply (shares outstanding) — prefer smaller float
- **L** — Leader vs laggard (RS ≥80)
- **I** — Institutional sponsorship (increasing, quality funds)
- **M** — Market direction (only buy in confirmed uptrend)

**Key insight:** CAN SLIM combines fundamentals + technicals. The "M" (market direction) is crucial — even the best stocks fail in bear markets.

### Academic Research Summary
- Combining technical + fundamental factors improves risk-adjusted returns vs either alone
- Momentum factor (12-1 month) is one of the most robust market anomalies
- Mean reversion works on 1-5 day timeframe; momentum on 3-12 month
- Volume confirms: high-volume price moves are more persistent
- Multi-factor models outperform single-factor by 20-40% in Sharpe ratio

---

# PART 3: MACRO/NEWS OVERLAY

## Federal Reserve & Monetary Policy

**FOMC Meeting Days (8 per year):**
- **Pre-announcement:** Volatility compresses 2-3 days before
- **Announcement (2:00 PM ET):** Initial volatility spike — DON'T trade the first 15 minutes
- **Press conference (2:30 PM ET):** Secondary move, often reverses the initial reaction
- **Rule:** Don't hold swing positions through FOMC announcements unless hedged
- **Dovish surprise:** Buy tech/growth. **Hawkish surprise:** Buy value/energy, sell growth.
- **Dot plot:** Watch for shifts in projected rate path — market prices in future, not present

## Inflation Data (CPI/PPI/PCE)

- **CPI release:** Usually second Tuesday/Wednesday of month, 8:30 AM ET
- **Hot CPI (above consensus):** Sell growth/tech, buy short-term Treasuries, DXY rallies
- **Cool CPI (below consensus):** Buy growth/tech, risk-on, DXY falls
- **PCE (Fed's preferred):** Released ~1 month after CPI, can reverse or confirm CPI signal
- **Rule:** Reduce position sizes by 50% the day before CPI/PCE releases

## Earnings Season

**Patterns:**
- **Pre-earnings run-up:** Stocks tend to drift up 5-10 days before earnings (on average +1-2%)
- **Post-earnings announcement drift (PEAD):** Stocks that beat estimates continue to drift in that direction for 30-60 days. One of the most robust anomalies in finance.
- **Earnings gap-and-go:** Stock gaps up >5% on earnings beat with heavy volume → tends to continue for 2-5 days
- **Rule:** Don't hold through earnings unless it's a deliberate play. The risk is binary.
- **Strategy:** Buy PEAD — enter the day after a strong earnings beat gap, ride for 5-10 days

## Options Flow / Unusual Activity

- Unusual call buying (especially sweeps) = bullish institutional conviction
- Put/call ratio extremes signal sentiment: >1.2 = excessive fear (contrarian bullish), <0.5 = excessive greed
- Large dark pool prints can signal institutional accumulation
- **Free sources:** Barchart.com unusual options, unusual whales (free tier)

## VIX & Fear/Greed Index

**VIX (CBOE Volatility Index):**
| Level | Interpretation | Action |
|-------|---------------|--------|
| <15 | Low fear / complacency | Be cautious, reduce size (calm before storm) |
| 15-20 | Normal | Trade normally |
| 20-30 | Elevated fear | Start looking for bounces, scale in |
| 30-40 | High fear | Aggressive buy candidates (mean reversion) |
| >40 | Panic | Don't catch falling knives initially. Wait for VIX to peak and turn down |

**VIX term structure:** Contango (front < back) = normal/bullish. Backwardation (front > back) = fear/bearish.

**CNN Fear/Greed Index:**
- 0-25: Extreme fear → contrarian buy zone
- 25-45: Fear → start nibbling
- 45-55: Neutral
- 55-75: Greed → tighten stops
- 75-100: Extreme greed → reduce exposure, no new longs

## Sector Rotation

**Economic cycle rotation:**
1. **Early recovery:** Consumer discretionary, financials, tech
2. **Mid-cycle:** Industrials, materials, tech
3. **Late cycle:** Energy, healthcare, staples
4. **Recession:** Utilities, staples, healthcare, gold

**How to use:** Check relative strength of sector ETFs (XLK, XLF, XLE, XLV, etc.) vs SPY. Buy sectors showing relative strength, avoid/short relative weakness.

## Bond Yields & Dollar

**2Y/10Y Spread:**
- Inverted (2Y > 10Y): Recession warning within 6-18 months
- Steepening (10Y rising faster): Risk-on, buy cyclicals
- Flattening: Risk-off, favor defensives

**DXY (Dollar Index):**
- Rising DXY: Headwind for commodities, emerging markets, gold, and crypto
- Falling DXY: Tailwind for above; also generally bullish for US multinationals
- Strong inverse correlation with gold and BTC (-0.5 to -0.8 typically)

## Tariff/Trade War Impacts
- Tariff announcements on China: Negative for industrials, semis, retail (import-dependent)
- Positive for domestic steel, materials (protected)
- Watch for escalation/de-escalation cycles — markets overreact initially then partially reverse
- **Rule:** Reduce exposure to trade-sensitive sectors during active trade negotiations

---

# PART 4: CRYPTO-SPECIFIC SIGNALS

## On-Chain Metrics

**Whale wallets (top 100 BTC holders):**
- Accumulation (wallets growing) = bullish
- Distribution to exchanges = bearish (preparing to sell)

**Exchange inflows/outflows:**
- Net outflows from exchanges = bullish (coins moving to cold storage → HODLing)
- Net inflows to exchanges = bearish (preparing to sell)
- **Source:** CryptoQuant (free tier), Glassnode (limited free)

## Funding Rates (Perpetual Futures)

| Funding Rate | Interpretation |
|-------------|---------------|
| Highly positive (>0.05%) | Overleveraged longs → short squeeze risk or correction |
| Slightly positive (0.01-0.03%) | Normal bullish sentiment |
| Negative | Shorts paying longs → bearish but contrarian bullish at extremes |
| Very negative (<-0.05%) | Extreme bearishness → potential long squeeze then reversal up |

## BTC Dominance

- Rising BTC dominance: Money flowing from alts to BTC → risk-off within crypto
- Falling BTC dominance: "Alt season" → riskier altcoins outperform
- BTC dominance >60%: Stick with BTC/ETH. <50%: Consider high-conviction alts

## Correlation with TradFi

- BTC correlation with Nasdaq: typically 0.5-0.8 in recent years
- During risk-off: correlation increases (everything sells together)
- During crypto-specific catalysts: correlation temporarily decreases
- **Rule:** Don't be max-long crypto when Nasdaq is showing distribution signals

## Halving Cycle

- Halvings occur ~every 4 years (next: ~2028)
- Historically: 12-18 months post-halving sees major bull run
- Current position in cycle matters for sizing and conviction

## Bitcoin ETF Flows

- Net positive ETF inflows = institutional demand, bullish
- Net negative outflows = distribution, bearish
- Track via: farside.co (free), Bloomberg terminal
- Large single-day inflows (>$500M) often precede 5-10% moves

---

# PART 5: RISK MANAGEMENT FRAMEWORK

## Position Sizing: R-Multiple System

**Core concept:** Define risk in units of "R" where 1R = the amount you'll lose if stopped out.

**For $10K account:**
- **Max risk per trade:** 1.5% = $150 (1R)
- **Max daily risk:** 3% = $300 (2R)
- **Max portfolio risk (all open positions):** 6% = $600 (4R)
- **Max correlated risk (same sector):** 3% = $300 (2R)

**Position size formula:**
```
Shares = Risk $ / (Entry Price - Stop Price)
Position Size = Shares × Entry Price

Example:
Stock at $50, stop at $48 (2 ATR), risk $150
Shares = $150 / $2 = 75 shares
Position = 75 × $50 = $3,750 (37.5% of account)
```

**Max position sizes by conviction:**
| Conviction | Max Position | Max Risk |
|-----------|-------------|----------|
| Score 7/10 | 20% of account | 1R ($150) |
| Score 8/10 | 30% of account | 1.5R ($225) |
| Score 9/10 | 40% of account | 2R ($300) |
| Score 10/10 | 50% of account | 2R ($300) |

## Kelly Criterion (Simplified)

```
Kelly % = W - [(1-W) / R]
W = Win rate (decimal)
R = Win/loss ratio (average win / average loss)

Example: 55% win rate, 2:1 reward-to-risk
Kelly = 0.55 - (0.45/2) = 0.55 - 0.225 = 0.325 = 32.5%
Half-Kelly (recommended) = 16.25% per trade
```

**Rule:** Always use Half-Kelly or less. Full Kelly is mathematically optimal but psychologically brutal during drawdowns.

## Stop Loss Strategy

| Type | When to Use | Implementation |
|------|------------|----------------|
| **Fixed ATR stop** | Default for all trades | 2 × ATR below entry |
| **Trailing stop** | Winning trades after 1R profit | Move stop to breakeven at +1R; trail at 2 ATR below highest close |
| **Time stop** | Trade going nowhere | Exit at 50% position if no movement after 5 trading days |
| **Catastrophic stop** | Black swan protection | Exit everything if account drops 10% in a week |

**Trailing stop rules:**
1. Never move stop further from price (only tighten)
2. Move to breakeven after +1R gain
3. After +2R: trail at 1.5 ATR below highest close
4. After +3R: trail at 1 ATR below highest close (lock in profits)

## Drawdown Management

| Drawdown Level | Action |
|---------------|--------|
| -3% from peak | Reduce position sizes to 75% |
| -5% from peak | Reduce to 50%, review all open trades |
| -8% from peak | Close all positions, go to cash for 48 hours minimum |
| -10% from peak | Cash only for 1 week. Review entire system before resuming |

## Risk-Off Signals (Go 100% Cash)

Go fully to cash when ANY of these occur:
- VIX >35 and rising
- 3 consecutive losing trades hitting full stop
- Account drawdown >8%
- FOMC day (reduce to minimal before 2 PM ET)
- Major geopolitical event (war, crisis)
- Your edge isn't working (5+ trades below expected win rate)

## When to Size Up vs Down

**Size UP when:**
- Win rate last 20 trades >60%
- Account at new equity high
- ADX >25 and trends are clean
- VIX 15-22 (Goldilocks zone)

**Size DOWN when:**
- Win rate last 20 trades <45%
- In drawdown from equity peak
- VIX >30 or <12
- Approaching earnings season with heavy exposure
- Multiple correlated positions

---

# PART 6: EDGE IDENTIFICATION

## Edge 1: Mean Reversion After Extreme Moves

**Setup:** Stock drops >3 standard deviations from 20-day mean (below lower Bollinger Band at 2SD) with RSI <20.

**Stats:** ~65% chance of bounce to 20 SMA within 5 days.

**Entry:** Buy when RSI crosses back above 30 from below (confirmation of reversal).
**Stop:** Below the extreme low.
**Target:** 20 SMA (middle Bollinger Band).

## Edge 2: Momentum Continuation

**Setup:** Stock breaks out of consolidation (>3 weeks) on >2x average volume, relative strength >80 vs market.

**Stats:** ~60% continuation rate for 5-10 more trading days.

**Entry:** Buy on first pullback to breakout level (support/resistance flip) or 9/21 EMA.
**Stop:** Below breakout level.
**Target:** 1.5-2x the height of the consolidation range, projected from breakout.

## Edge 3: Post-Earnings Drift (PEAD)

**Setup:** Stock reports earnings beating estimates by >10%, gaps up >5%, volume >3x average.

**Stats:** PEAD is one of the most documented anomalies — stocks tend to drift in the earnings surprise direction for 30-60 days.

**Entry:** Buy the day after earnings (avoid the gap day chaos). Enter on a pullback intraday or at open.
**Stop:** Below the gap-up low.
**Target:** Hold for 5-10 days, trail stop at 2 ATR.

## Edge 4: Sector Momentum

**Setup:** Sector ETF outperforming SPY by >3% over 20 days with rising relative strength.

**Entry:** Buy the strongest individual stocks within the strongest sector.
**Stop:** When sector RS turns negative vs SPY.
**Target:** Ride until sector rotation reverses (RS peaks and declines).

## Edge 5: Bollinger Band Squeeze Breakout

**Setup:** Bollinger Bandwidth at 6-month low + ADX <20 (coiled spring).

**Stats:** ~70% of the time, the ensuing move is significant (>2 ATR).

**Entry:** Buy (or short) on close outside the Bollinger Band with volume >1.5x average.
**Stop:** Middle Bollinger Band (20 SMA).
**Target:** 2-3x ATR from entry.

## Edge 6: Seasonal/Calendar Effects

- **January effect:** Small caps tend to outperform in January
- **Sell in May:** May-October historically weaker than November-April
- **Santa Rally:** Last 5 trading days of year + first 2 of new year tend to be positive
- **Pre-holiday drift:** Markets tend to drift up the day before long weekends
- **FOMC drift:** Markets tend to rally into FOMC days and drift post-announcement
- **Monday effect:** Mondays historically weakest day; Fridays near end of month strongest
- **Options expiration (OpEx):** Increased volatility around monthly OpEx (3rd Friday)

## Edge 7: Gap Fill

**Stats:** ~70% of gaps eventually fill. But "when" matters:
- Gaps on low volume: fill quickly (2-5 days)
- Gaps on high volume: may not fill for weeks/months (these are breakaway gaps)
- **Trade:** Only fade gaps on below-average volume. Don't fade high-volume breakaway gaps.

---

# PART 7: AVAILABLE DATA SOURCES

## Alpha Vantage API

**Base URL:** `https://www.alphavantage.co/query`
**API Key:** `D2WP85WKP7IPZKKJ`
**Rate limit:** 25 requests/day (free tier), 5 per minute

### Key Endpoints:

```bash
# Daily price data
curl "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&outputsize=full&apikey=D2WP85WKP7IPZKKJ"

# RSI
curl "https://www.alphavantage.co/query?function=RSI&symbol=AAPL&interval=daily&time_period=14&series_type=close&apikey=D2WP85WKP7IPZKKJ"

# MACD
curl "https://www.alphavantage.co/query?function=MACD&symbol=AAPL&interval=daily&series_type=close&apikey=D2WP85WKP7IPZKKJ"

# EMA
curl "https://www.alphavantage.co/query?function=EMA&symbol=AAPL&interval=daily&time_period=21&series_type=close&apikey=D2WP85WKP7IPZKKJ"

# SMA
curl "https://www.alphavantage.co/query?function=SMA&symbol=AAPL&interval=daily&time_period=50&series_type=close&apikey=D2WP85WKP7IPZKKJ"

# Bollinger Bands
curl "https://www.alphavantage.co/query?function=BBANDS&symbol=AAPL&interval=daily&time_period=20&series_type=close&apikey=D2WP85WKP7IPZKKJ"

# ATR
curl "https://www.alphavantage.co/query?function=ATR&symbol=AAPL&interval=daily&time_period=14&apikey=D2WP85WKP7IPZKKJ"

# ADX
curl "https://www.alphavantage.co/query?function=ADX&symbol=AAPL&interval=daily&time_period=14&apikey=D2WP85WKP7IPZKKJ"

# Stochastic
curl "https://www.alphavantage.co/query?function=STOCH&symbol=AAPL&interval=daily&apikey=D2WP85WKP7IPZKKJ"

# Company overview (fundamentals)
curl "https://www.alphavantage.co/query?function=OVERVIEW&symbol=AAPL&apikey=D2WP85WKP7IPZKKJ"

# Earnings
curl "https://www.alphavantage.co/query?function=EARNINGS&symbol=AAPL&apikey=D2WP85WKP7IPZKKJ"

# News & Sentiment
curl "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=D2WP85WKP7IPZKKJ"

# Crypto daily
curl "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=D2WP85WKP7IPZKKJ"
```

## Brave Search API (News/Sentiment)

```bash
# Market news
curl -H "X-Subscription-Token: BSAcbrLXkJ1m6XeZSHufp4KvcbZZzMs" \
  "https://api.search.brave.com/res/v1/web/search?q=stock+market+news+today&count=10"

# Earnings dates
curl -H "X-Subscription-Token: BSAcbrLXkJ1m6XeZSHufp4KvcbZZzMs" \
  "https://api.search.brave.com/res/v1/web/search?q=AAPL+earnings+date+2026&count=5"

# Sector rotation
curl -H "X-Subscription-Token: BSAcbrLXkJ1m6XeZSHufp4KvcbZZzMs" \
  "https://api.search.brave.com/res/v1/web/search?q=sector+rotation+this+week&count=10"
```

## Free APIs for Additional Data

| Data | Source | API/URL |
|------|--------|---------|
| **VIX** | CBOE via Yahoo Finance | `https://query1.finance.yahoo.com/v8/finance/chart/%5EVIX` |
| **Fear & Greed Index** | CNN/Alternative.me | `https://api.alternative.me/fng/?limit=10` (crypto) |
| **Crypto on-chain** | Blockchain.com | `https://api.blockchain.info/stats` |
| **BTC exchange flows** | CryptoQuant | cryptoquant.com (free tier with limits) |
| **Sector ETFs** | Yahoo Finance | Query XLK, XLF, XLE, XLV, XLP, XLI, XLB, XLU, XLRE, XLC |
| **Options flow** | Barchart.com | Manual check (free delayed data) |
| **Economic calendar** | Trading Economics | tradingeconomics.com/calendar |
| **BTC ETF flows** | farside.co | farside.co/btc (free, scrape) |
| **Funding rates** | Coinglass | coinglass.com/FundingRate |
| **Earnings calendar** | Alpha Vantage | Use EARNINGS endpoint above |
| **DXY** | Yahoo Finance | `https://query1.finance.yahoo.com/v8/finance/chart/DX-Y.NYB` |
| **Treasury yields** | FRED API | `https://api.stlouisfed.org/fred/series/observations?series_id=DGS10&api_key=YOUR_KEY` (free registration) |

---

# PART 8: THE SCORING SYSTEM

## Trade Scoring Rubric (1-10)

**Score each dimension 0-2 points. Total /10. Only take trades scoring ≥7.**

### 1. TECHNICAL SETUP (0-2 points)

| Score | Criteria |
|-------|----------|
| 0 | Indicators conflicting, no clear setup |
| 1 | 2-3 indicators aligned (e.g., MACD bullish + above 21 EMA) |
| 2 | 4+ indicators aligned: trend (MAs ✓), momentum (RSI/MACD ✓), volume (✓), pattern (✓) |

**Checklist:**
- [ ] Price above 21 EMA and 50 EMA? (+0.5)
- [ ] MACD bullish (above signal or histogram rising)? (+0.5)
- [ ] RSI between 40-70 (not overbought, not oversold dead cat)? (+0.25)
- [ ] Volume above 20-day average on setup day? (+0.25)
- [ ] ADX >20 (trending) or Bollinger squeeze (pending breakout)? (+0.25)
- [ ] Clean chart pattern (base, flag, pullback to support)? (+0.25)

### 2. MACRO/SENTIMENT (0-2 points)

| Score | Criteria |
|-------|----------|
| 0 | Macro headwinds (VIX >30 rising, hawkish Fed, hot CPI imminent) |
| 1 | Neutral (no major catalysts, VIX 15-25) |
| 2 | Tailwinds (VIX falling, dovish Fed, sector in favor, fear/greed <40 contrarian) |

**Checklist:**
- [ ] VIX <25 or falling from elevated level? (+0.5)
- [ ] No major data release within 24 hours (CPI, FOMC, NFP)? (+0.5)
- [ ] Sector showing relative strength vs SPY? (+0.5)
- [ ] Fear/Greed not at extreme greed (>80)? (+0.5)

### 3. RISK/REWARD (0-2 points)

| Score | Criteria |
|-------|----------|
| 0 | R:R < 1.5:1, or stop placement unclear |
| 1 | R:R between 1.5:1 and 2.5:1 with clear stop level |
| 2 | R:R ≥ 3:1 with obvious stop level (below structure, ATR-based) |

**Calculation:**
```
R:R = (Target - Entry) / (Entry - Stop)
Must be ≥ 2:1 for score of 1.5+
```

**Checklist:**
- [ ] Clear stop loss level (structure-based, not arbitrary)? (+0.5)
- [ ] Target at logical level (prior high, Fib extension, measured move)? (+0.5)
- [ ] R:R ≥ 2:1? (+0.5)
- [ ] Position size fits within risk rules (≤1.5% account risk)? (+0.5)

### 4. CATALYST (0-2 points)

| Score | Criteria |
|-------|----------|
| 0 | No catalyst, just "the chart looks good" |
| 1 | Mild catalyst (sector rotation, general momentum) |
| 2 | Strong catalyst (earnings beat + PEAD, major news, unusual options flow, institutional buying) |

**Checklist:**
- [ ] Recent positive earnings surprise or guidance raise? (+0.5)
- [ ] Unusual options activity (call sweeps, large blocks)? (+0.5)
- [ ] Sector rotation tailwind (money flowing into this sector)? (+0.5)
- [ ] News catalyst (product launch, upgrade, partnership)? (+0.5)

### 5. TIMING (0-2 points)

| Score | Criteria |
|-------|----------|
| 0 | Chasing (extended from MA, breakout was 3+ days ago, RSI >75) |
| 1 | Decent timing (first pullback, within entry zone) |
| 2 | Perfect timing (pullback to support + momentum turning up + volume drying up before entry) |

**Checklist:**
- [ ] Entry is at or near support (EMA, Fib, prior breakout level)? (+0.5)
- [ ] Not chasing (stock NOT extended >5% from 21 EMA)? (+0.5)
- [ ] Consolidation/pullback on declining volume (sellers exhausted)? (+0.5)
- [ ] StochRSI or RSI turning up from oversold on daily chart? (+0.5)

---

## TOTAL SCORE DECISION MATRIX

| Score | Action |
|-------|--------|
| **9-10** | Full position (2R risk). These are rare — maybe 1-2 per month. |
| **8** | Standard position (1.5R risk). Solid setup. |
| **7** | Half position (1R risk). Acceptable but not ideal. |
| **5-6** | NO TRADE. Watchlist only. Wait for improvement. |
| **<5** | Trash. Move on. |

---

## COMPLETE TRADE WORKFLOW

### Pre-Trade Checklist
```
1. Check macro: VIX level, any data releases today/tomorrow?
2. Check sector: Is this sector in favor? RS vs SPY?
3. Technical scan: Run through indicators on daily chart
4. Score the trade (fill out rubric above)
5. Score ≥7? → Calculate position size with ATR
6. Set entry, stop, and target BEFORE entering
7. Enter trade, set stops immediately
8. Log trade in journal with score and rationale
```

### During Trade Management
```
Day 1-2: Let it work. No adjustments unless catastrophic stop hit.
Day 3: If +1R → move stop to breakeven
Day 4-5: If +2R → trail stop at 1.5 ATR below highest close
Day 5+: Tighten trail to 1 ATR. Consider taking 50% off at target.
Day 10: If still open, evaluate — is the thesis still intact?
Time stop: If flat after 5 days and <0.5R profit → exit at market
```

### Post-Trade Review
```
- Did the score predict the outcome?
- Which factor was most important?
- What would I do differently?
- Update win rate and R-multiple tracking
```

---

## QUICK REFERENCE: DAILY ROUTINE

**Morning (Pre-Market, 8:00-9:30 AM ET):**
1. Check overnight futures, VIX, DXY
2. Check economic calendar — any releases today?
3. Review watchlist setups — any triggering?
4. Score any potential entries

**Market Hours (9:30 AM - 4:00 PM ET):**
1. First 30 minutes: OBSERVE ONLY (let the open settle)
2. 10:00 AM: Evaluate setups. Enter if scored ≥7.
3. Monitor open positions
4. 3:30-4:00 PM: Review positions for overnight holds

**Evening:**
1. Run technical scans for tomorrow's watchlist
2. Update trade journal
3. Check after-hours earnings for watchlist stocks

---

## APPENDIX: PAPER TRADING RULES

1. **Treat paper money like real money.** Same rules, same emotions practice.
2. **Track every trade** with: date, ticker, entry, stop, target, score, actual exit, P/L, R-multiple.
3. **Minimum 50 trades** before evaluating system effectiveness.
4. **Benchmark:** Must beat SPY buy-and-hold over same period.
5. **Win rate target:** >50% with average winner >1.5x average loser.
6. **Maximum 3 open positions** at any time with $10K.
7. **No revenge trading.** After 2 consecutive losses, take 24 hours off.
8. **Review weekly:** Every Friday, review all trades, update MEMORY.md with lessons.

---

*This is a living document. Update with lessons learned from paper trading. The best trading system is one you've tested, refined, and trust.*

## Position Sizing in Briefings (REQUIRED)
Every trade idea in the morning briefing MUST include:
- **Entry price** and **number of shares/units**
- **Position size in dollars** (e.g., "$3,750 / 20 shares")
- **Dollar risk** (e.g., "Risk: -$200 / 2% of portfolio")
- **Dollar reward** (e.g., "Reward: +$380 / 3.8% of portfolio")
- **R:R ratio** (e.g., "2:1")
Based on $10K starting capital:
- **Max risk per trade:** $300 (3% of portfolio)
- **Max position size:** $2,500 (25% of portfolio)
- **Max open positions:** 3 at any time
- **Max total exposure:** $7,500 (75% — always keep 25% cash)
- Position size = LESSER of (max risk ÷ per-share risk) OR ($2,500 ÷ share price)

## Entry & Overnight Rules
- **Entry range, not single price** — Set a buy zone (e.g., $78-79.50). If it opens above the range, DO NOT CHASE. Wait for pullback or skip.
- **Never hold single stocks through their own earnings** — ETFs are safer for overnight holds
- **Gap risk budget** — Assume any overnight hold could gap 5-8% against you. Your position size must survive that.
- **Morning stop** — If price gaps below your stop-loss overnight, sell at the open. No hoping. No averaging down.
- **Max overnight gap loss** — If worst-case gap would lose more than 4% of portfolio, reduce position size until it fits
