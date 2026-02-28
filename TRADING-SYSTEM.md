# TRADING SYSTEM — Complete Reference Document
## Ice Box × El Hefe | Multi-Factor Scoring & Risk Management

> **Purpose:** Systematic, rules-based trading framework combining technical analysis, macro overlay,
> Market Wizards wisdom, and quantitative risk management. No emotions. No FOMO. Just math and discipline.

> **Portfolio:** $10,000 paper trading → real money after 3 months of consistent execution
> **Default Style:** Momentum Holds (2-6 weeks) | Opportunistic Short-Term (2-10 days)

---

# PART 1: TECHNICAL INDICATORS

Ten core indicators. Each one has specific settings, decision rules, strengths, and failure modes.
No indicator works alone — they feed into the 5-dimension scoring rubric (Part 8).

---

## 1.1 RSI — Relative Strength Index

- **Settings:** 14-period, applied to close
- **Decision Rules:**
  - RSI > 70 → Overbought. Do NOT buy. Consider trimming if other signals confirm.
  - RSI < 30 → Oversold. Potential buy IF catalyst exists (Edge #2: Oversold Bounce).
  - RSI 40-60 → Neutral zone. Look for direction from other indicators.
  - RSI divergence: Price makes new high but RSI makes lower high → bearish divergence (weakening momentum).
  - RSI divergence: Price makes new low but RSI makes higher low → bullish divergence (selling exhaustion).
- **When it works:** Range-bound markets, mean-reversion setups, confirming oversold bounces.
- **When it fails:** Strong trending markets — RSI can stay overbought >70 for weeks in a momentum run.
  In a Stage 2 breakout, selling at RSI 70 means selling the best part of the move.
- **Integration:** RSI < 30 + catalyst = Edge #2 setup. RSI in range (40-65) = neutral, no penalty in scoring.
  RSI > 70 on entry = score penalty unless breakout with volume confirmation.

## 1.2 MACD — Moving Average Convergence Divergence

- **Settings:** 12-period EMA, 26-period EMA, 9-period signal line
- **Decision Rules:**
  - **Signal Line Crossover:** MACD line crosses above signal line → bullish. Below → bearish.
  - **Zero Line Cross:** MACD crosses above zero → momentum shifting bullish. Below zero → bearish.
  - **Histogram Divergence:** Histogram shrinking while price rises → momentum fading, prepare for reversal.
  - **Histogram expanding:** Trend accelerating, stay in trade.
  - Bullish setup: MACD crosses above signal AND above zero line = strongest signal.
  - Bearish setup: MACD crosses below signal AND below zero = strongest sell signal.
- **When it works:** Trending markets, confirming breakouts, identifying momentum shifts early.
- **When it fails:** Choppy/sideways markets produce whipsaw crossovers. Lagging indicator — by the time
  MACD confirms, the move may be 30-50% done.
- **Integration:** MACD bullish crossover = +1 to Technical Setup score. MACD bearish = -1.
  Used in Elder's Triple Screen as daily timing signal (Part 2).

## 1.3 Moving Averages — The Backbone

Four moving averages, each with a distinct purpose:

| MA | Type | Purpose | Source |
|----|------|---------|--------|
| 9 EMA | Exponential | Entry trigger, short-term momentum | Raschke |
| 21 EMA | Exponential | Trend confirmation, trailing stop for momentum holds | Seykota |
| 50 SMA | Simple | Intermediate trend, breakout reference (Edge #3) | Minervini |
| 200 SMA | Simple | Major trend filter, bull/bear market line | Paul Tudor Jones |

- **Decision Rules:**
  - **9 EMA:** Price crossing above 9 EMA = short-term momentum shift. Used for entry timing.
  - **21 EMA:** Primary trailing stop for momentum holds. Close below 21 EMA on daily = exit signal.
    Also used in Holy Grail setup (pullback TO 21 EMA when ADX > 30).
  - **50 SMA:** Breakout above 50 SMA with volume = Edge #3. Price above 50 SMA = intermediate uptrend.
    Minervini's SEPA requires price above 50 SMA.
  - **200 SMA (PTJ Filter):** THE most important filter.
    - Price ABOVE 200 SMA → standard scoring applies (need ≥8 for momentum, ≥9 for short-term).
    - Price BELOW 200 SMA → need 9+ score to take any trade (Rule 3, Market Wizards).
    - Paul Tudor Jones: "Nothing good happens below the 200-day moving average."
  - **MA Alignment (Bullish Stack):** 9 EMA > 21 EMA > 50 SMA > 200 SMA = maximum bullish alignment.
    All four aligned = +2 Technical Setup. Three aligned = +1. Less = 0 or negative.
  - **Death Cross:** 50 SMA crosses below 200 SMA = major bearish signal. Avoid new longs.
  - **Golden Cross:** 50 SMA crosses above 200 SMA = major bullish signal. Full speed ahead.
- **When it works:** Trending markets, identifying regime, trailing stops that let winners run.
- **When it fails:** Choppy markets cause repeated MA crosses (whipsaws). MAs lag — they confirm trends,
  they don't predict them.

## 1.4 Bollinger Bands

- **Settings:** 20-period SMA, 2 standard deviations
- **Decision Rules:**
  - **Squeeze:** Bands narrow significantly (bandwidth at multi-week low) → volatility contraction.
    Breakout coming. Direction unknown — wait for the breakout, then follow.
  - **Band Walk:** Price riding the upper band with closes consistently above the midline = strong uptrend.
    Do NOT sell just because price touches upper band in a trend.
  - **Mean Reversion:** Price touches lower band in a range-bound market → potential bounce back to midline.
  - **Bandwidth expansion:** After squeeze, rapid bandwidth expansion confirms breakout is real.
  - **W-Bottom:** Price hits lower band, bounces, retests near lower band with RSI divergence → bullish reversal.
- **When it works:** Identifying volatility compression before explosive moves. Squeeze + volume breakout is powerful.
- **When it fails:** In strong trends, price walks the band for extended periods — selling at upper band
  cuts winners short. Don't use for mean reversion in trending markets.
- **Integration:** Bollinger squeeze + breakout with volume = adds to Technical Setup score.

## 1.5 Volume — On-Balance Volume (OBV) & Confirmation

- **Settings:** OBV (cumulative), Volume MA (20-period for comparison)
- **Decision Rules:**
  - **Breakout Confirmation:** Price breakout MUST be accompanied by volume ≥ 1.5× the 20-day average.
    Breakout on low volume = likely false breakout. Do not enter.
  - **OBV Divergence:** OBV rising while price flat/declining = accumulation (smart money buying). Bullish.
    OBV declining while price rising = distribution (smart money selling). Bearish.
  - **Volume Dry-Up:** Volume declining into a base/consolidation = healthy. Sellers exhausted.
    This is what you WANT to see before a breakout (Timing dimension in scoring).
  - **Climax Volume:** Extremely high volume on a gap up/down often marks exhaustion. The move may be over.
    This is where Edge #1 (Earnings Gap Fade) applies.
  - **Volume on Pullback:** Low volume on pullback = healthy retracement. High volume on pullback = selling pressure, be cautious.
- **When it works:** Confirming breakouts (essential — never buy a breakout without volume).
  Identifying accumulation/distribution before price moves.
- **When it fails:** In low-float stocks, volume can be misleading. In ETFs, volume patterns differ
  from individual stocks. Crypto volume is often fake/wash traded.
- **Integration:** Volume confirmation on breakout = required for Edge #3 and Edge #7.
  No volume = automatic deduction from Technical Setup score.

## 1.6 ADX — Average Directional Index

- **Settings:** 14-period
- **Decision Rules:**
  - ADX < 20 → No trend. Market is range-bound. Use mean-reversion strategies only.
  - ADX 20-25 → Weak trend forming. Watch for confirmation.
  - ADX > 25 → Trending market confirmed. Use trend-following strategies.
  - ADX > 30 → Strong trend. Holy Grail setup territory (Edge #6).
  - ADX > 40 → Very strong trend but may be overextended. Watch for exhaustion.
  - ADX > 50 → Extreme. Trend likely near end. Do not initiate new positions.
  - **Key:** ADX measures trend STRENGTH, not direction. Use +DI/-DI for direction.
    +DI above -DI = bullish trend. -DI above +DI = bearish trend.
  - **Holy Grail Setup (Linda Raschke):** ADX > 30 AND price pulls back to 20 EMA → enter long
    with stop below recent swing low. This is Edge #6 — 55.6% win rate in backtests.
- **When it works:** Identifying trending vs. ranging markets. The Holy Grail setup is one of our
  highest-probability edges.
- **When it fails:** ADX lags. By the time ADX confirms a trend (>25), the move may be mature.
  ADX can stay elevated during choppy pullbacks, giving false confidence.
- **Integration:** ADX > 30 + pullback to 20 EMA = Holy Grail = auto 2/2 on Technical Setup score.

## 1.7 Stochastic RSI

- **Settings:** 14-period RSI fed into 14-period Stochastic, K=3, D=3
- **Decision Rules:**
  - StochRSI > 0.80 → Overbought confirmation. Strengthens bearish signals from other indicators.
  - StochRSI < 0.20 → Oversold confirmation. Strengthens bullish signals (especially Edge #2).
  - **Crossover:** %K crosses above %D in oversold territory → buy signal confirmation.
  - **Crossover:** %K crosses below %D in overbought territory → sell signal confirmation.
  - Use as CONFIRMATION only, never as primary signal.
- **When it works:** Adding confidence to RSI-based signals. More sensitive than RSI alone.
  Good for timing entries within a trend identified by other indicators.
- **When it fails:** Very noisy in trending markets. Gives many false overbought signals during uptrends.
  Should never override trend-following signals (MA alignment, MACD).
- **Integration:** Confirms oversold/overbought conditions. Secondary indicator in scoring.

## 1.8 VWAP — Volume Weighted Average Price

- **Settings:** Intraday only (resets daily). Anchored VWAP for multi-day analysis.
- **Decision Rules:**
  - Price above VWAP → Intraday bullish bias. Buyers in control.
  - Price below VWAP → Intraday bearish bias. Sellers in control.
  - **VWAP Reclaim (Edge #5):** Stock opens below VWAP, sells off, then reclaims VWAP with volume →
    intraday buy signal. Target: prior day's high or next resistance.
  - VWAP acts as intraday support/resistance. Institutions use VWAP for execution benchmarks.
  - Price repeatedly testing and holding VWAP = institutional accumulation.
  - **Anchored VWAP:** From earnings date, IPO date, or significant event — shows institutional
    cost basis. Price above anchored VWAP = institutions profitable = support.
- **When it works:** Intraday trading, identifying institutional activity, VWAP reclaim setups.
- **When it fails:** Meaningless on daily/weekly charts (it's an intraday tool).
  In low-volume stocks, VWAP is easily distorted by a few large orders.
- **Integration:** VWAP reclaim = Edge #5 (intraday only). Used in Timing dimension of scoring.

## 1.9 ATR — Average True Range

- **Settings:** 14-period
- **Decision Rules:**
  - ATR is NOT a directional indicator — it measures VOLATILITY (average range per bar).
  - **Position Sizing (Richard Dennis Turtle Method):**
    - Risk per trade = $300 (1R on $10K portfolio)
    - Stop distance = 2 × ATR
    - Position size = $300 / (2 × ATR) = number of shares
    - Example: Stock at $50, ATR = $2. Stop = $50 - $4 = $46. Shares = $300 / $4 = 75 shares.
      Position size = 75 × $50 = $3,750. BUT max position is $2,500, so cap at 50 shares.
  - **Stop Placement:**
    - Hard stop: 2 × ATR below entry price
    - Tight stop (short-term trades): 1.5 × ATR below entry
    - Wide stop (momentum holds): 2.5 × ATR below entry (gives more room)
  - **Volatility Filter:** If ATR is expanding rapidly, the stock is becoming more volatile.
    Wider stops needed, smaller position sizes. If ATR contracting → squeeze may be forming.
  - **ATR Trailing Stop:** Trail stop at entry price minus 2×ATR. As price rises, ATR stop rises.
    Never lower the stop. Classic trend-following exit.
- **When it works:** Always useful for position sizing and stop placement. The foundation of risk management.
- **When it fails:** ATR doesn't tell you direction. A high ATR stock can go up or down violently.
  In gap situations, ATR-based stops can be blown through.
- **Integration:** ATR is THE input for position sizing (Part 5). Used in every single trade.
  Rule 5 (Market Wizards) = ATR-based position sizing.

## 1.10 Put/Call Ratio

- **Settings:** CBOE equity put/call ratio (daily)
- **Decision Rules:**
  - Ratio > 1.0 → More puts than calls → Fear → Contrarian BUY signal.
    The crowd is hedging/betting on downside → often marks bottoms.
  - Ratio 0.7-1.0 → Normal range. No signal.
  - Ratio < 0.7 → Excessive optimism → Contrarian SELL signal.
    The crowd is all-in on calls → complacency → often marks tops.
  - Ratio > 1.2 → Extreme fear → Strong contrarian buy signal (combine with VIX > 30).
  - **5-day moving average** of put/call ratio smooths out noise. Use the MA, not single-day readings.
  - **Equity-only ratio** is more useful than total ratio (which includes index hedging).
- **When it works:** Major market turning points. When combined with VIX extremes and RSI oversold,
  it identifies capitulation bottoms reliably.
- **When it fails:** In sustained bear markets, the ratio can stay elevated for months.
  Not useful for individual stock analysis — it's a market-wide sentiment indicator.
- **Integration:** Put/Call > 1.0 + VIX > 25 = adds to Macro/Sentiment score. It's a macro overlay
  indicator, not a trade trigger by itself.
- **Data Source:** CBOE publishes daily on cboe.com/us/options/market_statistics. Not available via
  Finnhub/Alpha Vantage free tiers. Check manually or scrape weekly. Use as context, not real-time signal.

---

# PART 2: MULTI-FACTOR CONFIRMATION SYSTEMS

Three proven systems from legendary traders. We don't use any one exclusively — we extract
the best elements from each and map them to our 5-dimension scoring rubric.

---

## 2.1 Elder's Triple Screen

**Source:** Dr. Alexander Elder, "Trading for a Living"

The core idea: Use THREE timeframes to filter trades. Each screen eliminates bad trades.

| Screen | Timeframe | Purpose | Tool |
|--------|-----------|---------|------|
| Screen 1 | Weekly | Identify the TREND | MACD histogram slope, 13-week EMA direction |
| Screen 2 | Daily | Find TIMING | Force Index (2-day EMA), RSI, Stochastic |
| Screen 3 | Intraday | Pinpoint ENTRY | Trailing buy stop, breakout of prior bar's high |

- **Screen 1 — Weekly Trend:**
  - Weekly MACD histogram rising → bullish. Only look for LONG trades.
  - Weekly MACD histogram falling → bearish. Only look for SHORT trades (or sit out).
  - This eliminates ~50% of trade ideas immediately. If weekly trend is against you, skip the trade.

- **Screen 2 — Daily Timing:**
  - In a weekly uptrend, look for DAILY pullbacks (oversold oscillator readings).
  - Force Index < 0 (2-day EMA) in a weekly uptrend → buying opportunity.
  - RSI < 45 on daily while weekly is bullish → good entry zone.
  - This is counter-intuitive: in a weekly uptrend, you buy daily weakness.

- **Screen 3 — Intraday Entry:**
  - Place a trailing buy stop above the prior day's high.
  - If price breaks above yesterday's high → entry triggered. If not → lower the stop tomorrow.
  - This ensures you enter on strength within a pullback within an uptrend.

- **Mapping to Our System:**
  - Screen 1 (weekly trend) → feeds into Technical Setup score + MA alignment check.
  - Screen 2 (daily timing) → feeds into Timing dimension.
  - Screen 3 (intraday entry) → execution tactic, not scored but followed.

## 2.2 Minervini's SEPA — Specific Entry Point Analysis

**Source:** Mark Minervini, "Trade Like a Stock Market Wizard"

**Core Principle:** Only buy stocks in a STAGE 2 uptrend. Stages:
- Stage 1: Basing (accumulation) — flat, boring, ignore
- Stage 2: Advancing (markup) — THIS is where you buy
- Stage 3: Topping (distribution) — DO NOT buy, start watching for exits
- Stage 4: Declining (markdown) — stay away entirely

**Stage 2 Checklist (ALL must be true):**
1. ✅ Price above 50-day SMA
2. ✅ Price above 150-day SMA
3. ✅ Price above 200-day SMA
4. ✅ 200-day SMA trending UP for at least 1 month (ideally 4-5 months)
5. ✅ 50-day SMA above 150-day SMA and above 200-day SMA
6. ✅ Price at least 30% above 52-week low (more = better)
7. ✅ Price within 25% of 52-week high (closer = better, ideally within 15%)
8. ✅ Relative Strength rating ≥ 70 (ideally ≥ 80) — stock outperforming peers

**Volatility Contraction Pattern (VCP):**
- Look for tightening price ranges (contractions get smaller: 20% → 12% → 6%)
- Each contraction shows sellers being absorbed
- Breakout from the final tight contraction = high-probability entry
- Volume should dry up during contractions, then surge on breakout

**Mapping to Our System:**
- Stage 2 checklist → feeds directly into Technical Setup scoring
- If a stock fails the Stage 2 checklist → automatic 0/2 on Technical Setup
- VCP breakout with volume = Edge #3 or Edge #7
- 52-week high proximity = momentum confirmation

## 2.3 O'Neil's CAN SLIM

**Source:** William O'Neil, "How to Make Money in Stocks"

| Letter | Factor | What to Look For |
|--------|--------|-----------------|
| C | Current Quarterly Earnings | EPS up ≥ 25% YoY, accelerating |
| A | Annual Earnings Growth | 5-year annual EPS growth ≥ 25%, ROE ≥ 17% |
| N | New Product/Management/High | Something new driving growth; near 52-week high |
| S | Supply & Demand | Low float + high volume on breakout days |
| L | Leader or Laggard | RS rating ≥ 80. Buy #1 in sector, not #4 |
| I | Institutional Sponsorship | Increasing fund ownership, quality funds accumulating |
| M | Market Direction | 3 out of 4 stocks follow market. Confirm uptrend first |

**Key Rules from O'Neil:**
- Buy stocks making new highs, not new lows (counterintuitive but proven)
- Cut ALL losses at 7-8% below purchase price — no exceptions
- The market "M" factor overrides everything — don't fight the market direction
- Look for "cup with handle" and "flat base" chart patterns

**Mapping to Our System:**
- C + A → feeds into Catalyst dimension (earnings quality)
- N → feeds into Catalyst dimension (new product/catalyst)
- S → feeds into Technical Setup (supply/demand, volume)
- L → we check RS rating, only trade leaders
- I → feeds into Catalyst (institutional support)
- M → feeds into Macro/Sentiment dimension (market direction)

## 2.4 How All Three Systems Map to Our 5-Dimension Scoring

| Our Dimension | Elder | Minervini | O'Neil |
|---------------|-------|-----------|--------|
| Technical Setup | Screen 1 (trend) | Stage 2 checklist, VCP | S (supply/demand), chart patterns |
| Macro/Sentiment | — | — | M (market direction) |
| Risk/Reward | Screen 3 (entry) | VCP tight stop | 7-8% stop rule |
| Catalyst | — | — | C, A, N, I (fundamentals) |
| Timing | Screen 2 (daily) | VCP breakout timing | Buy at new highs |

---

# PART 3: MACRO OVERLAY

Macro conditions affect ALL trades. A great technical setup in a terrible macro environment
will likely fail. This section defines how macro factors adjust our scoring.

---

## 3.1 Federal Reserve Policy

- **Hawkish (raising rates, tightening):**
  - Negative for growth stocks, positive for financials
  - Reduce position sizes, raise score thresholds
  - Score adjustment: -0.5 from Macro/Sentiment dimension
  - Focus on value, dividends, commodities

- **Dovish (cutting rates, easing):**
  - Positive for growth stocks, tech, crypto
  - Standard position sizing, normal thresholds
  - Score adjustment: +0.5 to Macro/Sentiment dimension
  - Full speed ahead on momentum plays

- **Pause/Data-Dependent:**
  - Neutral — market moves on each data release
  - Score adjustment: +0 (neutral)
  - Watch CPI/NFP/PCE closely for hints of next move

## 3.2 CPI/PPI Inflation Data

- **CPI > Expected:** Hawkish signal → risk-off → negative for growth/tech
  - Day of release: avoid new entries. Wait for dust to settle (24-48 hours).
  - Hot CPI = rate hike fears = bonds sell, dollar rises, stocks fall.
- **CPI < Expected:** Dovish signal → risk-on → positive for growth/tech
  - Cool CPI = rate cut hopes = bonds rally, dollar falls, stocks rally.
- **Core CPI (ex food/energy):** The Fed focuses on CORE. Core > headline = still inflationary.
- **PPI (Producer Prices):** Leading indicator for CPI. PPI cooling = CPI likely to cool.
- **Rule EC1:** Tighten stops before CPI release. It's a binary event.

## 3.3 Earnings Season Patterns

- **Weeks 1-2 of earnings season:** Banks report first. Sets the tone.
  - If banks beat → bullish tone for season. If they miss → caution.
- **Weeks 3-4:** Big tech reports. Drives Nasdaq direction.
- **Post-earnings:** 2-3 week window where individual stock moves dominate macro.
- **Rule E1:** No entries within 3 days of a stock's earnings report (binary risk).
- **Edge #1 (Earnings Gap Fade):** AFTER earnings, if stock gaps up >5% on high volume but
  fades below VWAP → short-term fade setup (60-65% win rate).

## 3.4 VIX — Volatility Index

| VIX Level | Regime | Action |
|-----------|--------|--------|
| < 15 | Complacent | Market calm. Good for momentum but watch for spike. Sell premium. |
| 15-20 | Normal | Standard operations. Normal scoring applies. |
| 20-25 | Elevated | Increase caution. Tighten stops. Smaller positions. |
| 25-30 | High Fear | Contrarian opportunities. Watch for reversal setups. |
| > 30 | Panic | Maximum contrarian signal. Start building positions if other factors confirm. |
| > 40 | Capitulation | Rare. Historic buying opportunity (March 2020, Oct 2022). |

- **VIX Crush:** VIX drops sharply (>15% in a day) after a spike → market bottoming signal.
- **VIX Term Structure:** Contango (VIX futures > spot) = normal. Backwardation (spot > futures) = fear.
  Backwardation + VIX > 30 = extreme fear = buy signal.
- **Score Integration:** VIX < 20 = +0.5 Macro. VIX 20-30 = +0. VIX > 30 = -0.5 Macro
  UNLESS put/call > 1.0 too, then contrarian +0.5.

## 3.5 Sector Rotation Model

Classic sector rotation through the business cycle:

| Cycle Phase | Leading Sectors | Lagging Sectors |
|------------|----------------|-----------------|
| Early Recovery | Financials, Industrials, Consumer Discretionary | Utilities, Healthcare |
| Mid Cycle | Technology, Industrials, Materials | Utilities, Consumer Staples |
| Late Cycle | Energy, Materials, Healthcare | Tech, Consumer Discretionary |
| Recession | Utilities, Consumer Staples, Healthcare | Financials, Industrials |

- Track money flow between sectors weekly using relative strength.
- Overweight leading sectors, avoid lagging sectors.
- **Score Integration:** Trade is in a leading sector = +0.5 to Macro/Sentiment. Lagging sector = -0.5.

## 3.6 Bond Yields — 2yr/10yr Spread

- **2yr/10yr Spread (Normal: 10yr > 2yr):**
  - Inverted yield curve (2yr > 10yr) → Recession signal, historically 12-18 months ahead.
  - Curve steepening (spread widening after inversion) → Recession imminent or starting.
  - Normal curve → Economic expansion, risk-on.
- **10yr Yield Level:**
  - Rising yields → Negative for growth/tech (higher discount rate on future earnings).
  - Falling yields → Positive for growth/tech, bonds rally (TLT trade).
  - Yields > 5% → Major headwind for equities.
  - Yields 3.5-4.5% → Manageable, market can rally with earnings growth.

## 3.7 DXY — US Dollar Index

- **Dollar Strengthening (DXY rising):**
  - Negative for commodities (gold, silver, oil) — inverse correlation
  - Negative for international/EM stocks (EEM)
  - Negative for crypto (BTC historically inverse to DXY)
  - Can be positive for domestic-focused companies
- **Dollar Weakening (DXY falling):**
  - Positive for commodities, gold, silver
  - Positive for international stocks
  - Positive for crypto
  - **Current signal: USD BEARISH → supports gold/silver/commodity thesis**
- **Score Integration:** DXY direction aligned with trade thesis = +0.25. Against = -0.25.

## 3.8 Tariff/Trade Policy Impacts

- **New tariffs announced:**
  - Negative for importers (retailers, tech hardware)
  - Positive for domestic manufacturers (steel, construction materials — CAT, VMC)
  - Creates uncertainty → VIX spike potential
  - Supply chain disruption → watch earnings guidance
- **Tariff reduction/trade deals:**
  - Positive for global trade, EM stocks, multinationals
  - Reduces input costs for manufacturers
- **Score Integration:** Tariff risk to specific stock/sector = -0.5 from Catalyst.
  Tariff benefit = +0.5 to Catalyst.

---

# PART 4: CRYPTO-SPECIFIC SIGNALS

Crypto requires additional signals beyond traditional technical analysis.
These supplement (not replace) the standard 10 indicators.

---

## 4.1 On-Chain Metrics

- **Exchange Flows:**
  - Net inflows to exchanges → bearish (selling pressure coming)
  - Net outflows from exchanges → bullish (holders moving to cold storage, HODLing)
  - Track via CryptoQuant, Glassnode (free tiers available)
- **Whale Wallets:**
  - Wallets holding >1,000 BTC — track accumulation/distribution
  - Whale accumulation during price dip → bullish (smart money buying)
  - Whale distribution during price rise → bearish (smart money selling)
- **Miner Behavior:**
  - Miner reserves declining → selling pressure (need to cover costs)
  - Miner reserves stable/rising → no urgency to sell → bullish

## 4.2 Funding Rates

- **Positive Funding Rate:**
  - Longs paying shorts → market overleveraged long → risk of long squeeze
  - High positive funding (>0.05%) → extreme bullish positioning → contrarian bearish signal
  - The crowd is leveraged long → the crowd usually gets squeezed
- **Negative Funding Rate:**
  - Shorts paying longs → market overleveraged short → risk of short squeeze
  - Negative funding → contrarian bullish signal
- **Neutral Funding (0.01%):** Balanced market, no leverage-driven signal

## 4.3 BTC Dominance

- **BTC Dominance > 50%:** Risk-off in crypto. Capital flowing to BTC (safe haven).
  Avoid altcoins. Focus on BTC-related trades (MSTR, COIN).
- **BTC Dominance 45-50%:** Transitional. Watch for direction.
- **BTC Dominance < 45%:** ALT SEASON. Capital rotating into altcoins.
  Higher-beta plays outperform. ETH, SOL outperform BTC.
  Crypto equity proxies (MARA, COIN) may outperform MSTR.
- **Trend of dominance matters more than absolute level.**

## 4.4 ETF Flows

- **IBIT (BlackRock), FBTC (Fidelity) — Bitcoin ETFs:**
  - Daily net inflows > $100M → strong institutional demand → bullish BTC
  - Daily net outflows > $100M → institutional selling → bearish BTC
  - Sustained inflows over multiple weeks → trend confirmation
  - Track via BitMEX Research, Bloomberg ETF flow data
- **ETF flows represent INSTITUTIONAL sentiment, not retail.**
  - Institutions move slowly. Sustained flows = trend. One-day spikes = noise.

## 4.5 Halving Cycle Positioning

- **Bitcoin halving occurs every ~4 years (next: ~April 2028).**
- **Historical pattern:**
  - 12-18 months post-halving: major bull run
  - 6-12 months pre-halving: accumulation phase
  - 18-24 months post-halving: cycle top, then bear market
- **Current position:** ~2 years post April 2024 halving → mid-cycle
- **Cycle awareness affects position sizing, not entry/exit signals.**

## 4.6 Crypto Fear & Greed Index

| Score | Level | Action |
|-------|-------|--------|
| 0-25 | Extreme Fear | Contrarian buy zone (combine with BTC at support) |
| 25-45 | Fear | Accumulation zone. Start building positions. |
| 45-55 | Neutral | No signal. Standard rules apply. |
| 55-75 | Greed | Reduce new entries. Let existing positions run. |
| 75-100 | Extreme Greed | Trim positions. Do NOT initiate new longs. |

- **API:** `https://api.alternative.me/fng/` — free, no key needed
- **Integration:** Fear/Greed feeds into Macro/Sentiment dimension for crypto trades.

## 4.7 Correlation with Nasdaq

- **BTC-Nasdaq correlation typically 0.5-0.8 during risk-on environments.**
  - When correlated: BTC follows Nasdaq. Trade crypto using equity macro signals.
  - When decorrelated: BTC trading on its own fundamentals (halving, ETF flows).
- **Decorrelation events:** Regulatory news, exchange blowups, crypto-specific catalysts
  cause temporary decorrelation. During these events, crypto-specific signals dominate.
- **Current signal: BTC/ETH BEARISH per 42 Macro — even as SPY/QQQ bullish.**
  This implies decorrelation. Be cautious on crypto positions.

---

# PART 5: RISK MANAGEMENT FRAMEWORK

This is the most important section. Good risk management turns a mediocre strategy
into a profitable system. Bad risk management turns a great strategy into bankruptcy.

---

## 5.1 R-Multiple Sizing

- **1R = Maximum loss per trade = $300** (on a $10,000 portfolio = 3% risk)
- Every trade is measured in R-multiples:
  - Loss of $300 = -1R (maximum allowed loss)
  - Loss of $150 = -0.5R (stopped out early, good)
  - Gain of $300 = +1R (breakeven trade after risk)
  - Gain of $900 = +3R (target for momentum holds)
  - Gain of $1,500 = +5R (A+ setup target, per PTJ Rule 13)
- **Position sizing formula:**
  - Shares = 1R / (Entry - Stop) = $300 / (Entry - Stop)
  - Example: Entry $100, Stop $96 (2×ATR). Risk per share = $4.
    Shares = $300 / $4 = 75 shares. Position = $7,500 → EXCEEDS $2,500 MAX.
    Cap at 25 shares ($2,500). Actual risk = 25 × $4 = $100 (0.33R).
  - This is fine — the position size cap protects against concentration risk.
    The actual R-risk is lower, which is conservative.

## 5.2 Kelly Criterion (Simplified)

- **Formula:** Kelly % = (Win Rate × Avg Win / Avg Loss - Loss Rate) / (Avg Win / Avg Loss)
- **Simplified:** Kelly % = Edge × Win_Rate / Loss_Rate
- **Example with our Breakout + Trailing edge:**
  - Win rate: 47.7%, Loss rate: 52.3%
  - Avg win: ~4.39R (profit factor), Avg loss: ~1R
  - Kelly = (0.477 × 4.39 - 0.523) / 4.39 = (2.094 - 0.523) / 4.39 = 0.358 = 35.8%
  - **Half-Kelly** (conservative): 17.9% of portfolio per trade
  - On $10K = ~$1,790 per position. Our $2,500 cap is slightly above half-Kelly. Conservative enough.
- **Rule:** Never use full Kelly. Half-Kelly or less. Overbetting = ruin.

## 5.3 Max Drawdown Rules

| Drawdown | Action | Duration |
|----------|--------|----------|
| -5% ($500) | Review recent trades. Tighten stops. | Immediate |
| -10% ($1,000) | STOP trading. Full review. | 48 hours minimum |
| -15% ($1,500) | STOP trading. Complete system review. | 1 week minimum |
| -20% ($2,000) | FULL STOP. Something is fundamentally wrong. | Until complete overhaul |

- **Recovery Math (Rule M5):**
  - 10% loss requires 11.1% gain to recover
  - 20% loss requires 25% gain to recover
  - 30% loss requires 42.9% gain to recover
  - 50% loss requires 100% gain to recover
  - **This is why cutting losses fast is THE most important rule.**
  - Asymmetric damage: losses compound faster than gains recover.

- **Volatility Drag (Rule M6):**
  - A portfolio that goes +20% then -20% doesn't return to zero — it's at -4%.
  - Higher volatility = more drag. This is why position sizing matters.
  - Smooth, consistent returns beat volatile swings even if average return is the same.

## 5.4 Stop Strategies

Four stop strategies, used based on trade type:

### Hard Stop (at entry)
- Placed immediately upon entry
- Set at 2 × ATR below entry price
- NEVER move this stop lower. Only move it UP.
- Used for all trades initially
- Example: Entry $50, ATR $2. Hard stop at $46.

### Trailing 21 EMA Stop (for momentum holds)
- Once trade is profitable by +1R, switch from hard stop to trailing 21 EMA
- Close below 21 EMA on daily close = EXIT (not intraday — daily close only)
- This lets winners run while protecting gains
- This is the primary exit method for momentum holds (2-6 weeks)

### ATR-Based Trailing Stop
- Trail stop at highest close minus 2 × ATR
- More mechanical than 21 EMA, useful for automated systems
- Recalculate daily. NEVER lower the stop.
- Richard Dennis (Turtles) method

### Time Stop
- **Losers die in 2-5 days regardless.** If a trade isn't working within 5 days, exit.
- This prevents capital from being tied up in dead trades.
- Jim Rogers: "I just wait until there is money lying in the corner,
  and all I have to do is go over there and pick it up."
- If you have to wait more than 5 days for the thesis to play out → thesis was wrong. Exit.

## 5.5 Position Sizing Rules

| Rule | Limit | Rationale |
|------|-------|-----------|
| Max position size | $2,500 | 25% of $10K portfolio |
| Max risk per trade | $300 (3%) | 1R = 3% of portfolio |
| Max open positions | 3 | Focus + risk management |
| Max positions per sector | 2 | Diversification (Rule 10) |
| Max correlation between positions | 0.7 | Rule C1 — avoid hidden concentration |
| Cash reserve | 25% always ($2,500) | Dry powder for opportunities |
| Max portfolio at risk | 9% | 3 positions × 3% each |

- **Why 25% cash always?**
  - Opportunities come when others are panicking. Cash lets you buy the dip.
  - Psychologically, cash gives you the ability to be patient.
  - 75% deployed + 25% cash = defensive but not passive.

---

# PART 6: PROVEN TRADING EDGES

Seven specific, backtested trading setups. Each has defined criteria, expected win rate,
and risk parameters. These are the ONLY setups we trade.

---

## Edge #1: Earnings Gap Fade

- **Setup:** Stock gaps up >5% on earnings, high volume, but fails to hold gains.
  Price fades below VWAP within first 2 hours.
- **Entry:** Short (or avoid long) when price closes below VWAP after earnings gap up.
  For paper trading: fade by entering short or just avoiding the long.
- **Stop:** Above the high of the gap day.
- **Target:** Prior day's close (the gap fill).
- **Win Rate:** 60-65%
- **R:R:** Typically 1.5:1 to 2:1
- **Why it works:** The initial gap is retail FOMO buying. Smart money sells into the gap.
  Overreaction fades to fair value within 1-3 days.
- **When it fails:** When earnings represent a genuine fundamental shift (new product,
  massive guidance raise). Check: is this a one-time beat or a paradigm shift?
- **Rule E1 interaction:** This edge ONLY applies AFTER earnings have been reported.
  It doesn't violate the "no entries within 3 days of earnings" rule because earnings are done.

## Edge #2: Oversold Bounce

- **Setup:** RSI < 30 AND a catalyst exists (positive news, sector tailwind, support level).
- **Entry:** When RSI crosses back ABOVE 30 with a bullish candle + volume.
  Don't buy while RSI is still falling — wait for the turn.
- **Stop:** Below the recent swing low (usually 1.5-2 × ATR).
- **Target:** 21 EMA (conservative), 50 SMA (moderate), prior resistance (aggressive).
- **Win Rate:** 58%
- **R:R:** 2:1 to 3:1
- **Why it works:** Mean reversion from oversold conditions + a catalyst to trigger the bounce.
  Without a catalyst, oversold can stay oversold (value trap). The catalyst is REQUIRED.
- **When it fails:** In a Stage 4 decline (Minervini), stocks can go from RSI 30 to RSI 15.
  If the stock is below the 200 SMA with declining fundamentals → skip. Falling knives cut.
- **Catalyst examples:** Analyst upgrade, insider buying, positive sector news, FDA approval,
  legal resolution, buyback announcement.

## Edge #3: Breakout Above 50 MA with Volume

- **Setup:** Stock has been consolidating (flat base, VCP, cup-with-handle) near or just
  below the 50 SMA. Then breaks above 50 SMA on volume ≥ 1.5× the 20-day average.
- **Entry:** At the breakout above 50 SMA with volume confirmation. Same day or next day.
- **Stop:** Below the 50 SMA (or below the bottom of the consolidation range).
- **Target:** Prior high (conservative), measured move of the base (aggressive).
- **Win Rate:** 52% (lower win rate but higher R:R makes it profitable)
- **R:R:** 3:1 to 5:1
- **Why it works:** Consolidation above/near support with volume breakout = institutional accumulation
  being confirmed by momentum. Minervini's VCP pattern often precedes this.
- **When it fails:** False breakouts (breakout then immediate reversal). That's why volume
  confirmation is REQUIRED. Also fails in a bear market (200 SMA filter — Rule 3).
- **Volume requirement is non-negotiable.** No volume = no trade.

## Edge #4: Sector Rotation Momentum

- **Setup:** Money flowing into a sector (based on relative strength, ETF flows).
  Buy the strongest stock in the strongest sector.
- **Entry:** When sector RS turns positive and individual stock breaks out of base.
- **Stop:** Below the 21 EMA.
- **Target:** Trail with 21 EMA as long as sector remains strong.
- **Win Rate:** Variable (depends on macro cycle accuracy)
- **R:R:** High — sector trends last months.
- **Why it works:** Institutional money moves in sectors, not individual stocks.
  Once a sector rotation begins, it persists for weeks/months.
- **When it fails:** When macro regime shifts rapidly (surprise rate hike, geopolitical shock).
  Sector rotation is slow — sudden changes break the pattern.
- **Current opportunity:** Gold/Silver sector rotation is BULLISH per 42 Macro signals.

## Edge #5: VWAP Reclaim (Intraday)

- **Setup:** Stock opens below VWAP, sells off to test support (prior day's low, key level),
  then reverses and reclaims VWAP with increasing volume.
- **Entry:** When price crosses back above VWAP with volume confirmation.
- **Stop:** Below the session low.
- **Target:** Prior day's high, premarket high, or next resistance level.
- **Win Rate:** ~55% (estimated, limited backtesting due to intraday nature)
- **R:R:** 1.5:1 to 2:1
- **Why it works:** VWAP reclaim shows institutional buyers stepping in. The morning selloff
  shakes out weak hands, then real buyers take control.
- **When it fails:** On heavy selling days where VWAP reclaim is temporary. Needs confirmation
  from broader market direction (SPY also reclaiming VWAP = stronger signal).
- **Mostly for SHORT-TERM trades (2-10 days). Not for momentum holds.**

## Edge #6: Holy Grail Setup (Linda Raschke)

- **Setup:** ADX > 30 (strong trend confirmed) AND price pulls back to the 20 EMA.
  The pullback should be on declining volume (healthy retracement).
- **Entry:** When price bounces off 20 EMA with a bullish candle. Or buy at 20 EMA with
  stop below the 20 EMA by 1 × ATR.
- **Stop:** Below the 20 EMA minus 1 × ATR (tight stop in a strong trend).
- **Target:** Prior high (conservative), trail with 20 EMA for extended move.
- **Win Rate:** 55.6% (backtested)
- **R:R:** 2:1 to 4:1
- **Backtest Results:** +9.2% annual return, 1.94 profit factor (with trailing stop)
- **Why it works:** In a strong trend (ADX > 30), the 20 EMA acts as dynamic support.
  Pullbacks are buying opportunities, not trend changes. Mean reversion within a trend.
- **When it fails:** When ADX is declining (trend weakening). ADX > 30 but falling = trend
  exhaustion, not trend strength. ADX must be RISING or stable above 30.
- **Score Integration:** Holy Grail setup = automatic 2/2 on Technical Setup dimension.
  This is our highest-conviction technical signal.

## Edge #7: Breakout + Trailing Stop (Best Backtest Results)

- **Setup:** Price breaks above a defined resistance level (52-week high, cup-with-handle,
  flat base, VCP) on volume ≥ 1.5× average. Enter on breakout.
- **Entry:** At breakout or within 1% of breakout level on the breakout day.
- **Stop:** Initially 2 × ATR below entry. Once +1R, switch to trailing 21 EMA.
- **Target:** No fixed target. Trail with 21 EMA and let the winner run.
  Exit ONLY on a daily close below 21 EMA.
- **Win Rate:** 47.7% (less than half — but the winners are HUGE)
- **R:R:** Average winner = 4.39R. This is the key — low win rate, massive payoff.
- **Backtest Results:**
  - Annual return: +52.9%
  - Profit factor: 4.39
  - Sharpe ratio: 1.16
  - Max drawdown: 2.3%
  - **This is our best-performing strategy by far.**
- **Why it works:** Trend following with trailing stops = asymmetric outcomes.
  Small losses, huge wins. Seykota's philosophy: "Cut losers, ride winners."
- **When it fails:** In choppy, range-bound markets, breakouts fail and you take many -1R losses.
  The 47.7% win rate means you WILL have losing streaks. Must have the discipline to keep
  taking every setup — because the next winner could be a +10R trade.
- **Comparison to Fixed Target:**
  - Breakout + Fixed 3:1 target: 40.4% win rate, +22.8% return, 1.83 PF
  - Breakout + Trailing: 47.7% win rate, +52.9% return, 4.39 PF
  - **Trailing CRUSHES fixed targets.** Let winners run. Period.

---

# PART 7: API INTEGRATION

Real-time data feeds for automated scanning, analysis, and alerts.

---

## 7.1 Alpha Vantage

- **Tier:** Free
- **Rate Limits:** 25 API calls/day, 5 calls/minute
- **Data Available:** Daily/weekly candles, RSI, MACD, EMA, SMA, Bollinger Bands, ADX, ATR
- **Key:** Free tier (use `demo` or register for free key at alphavantage.co)

**Curl Examples:**

```bash
# Daily candles for NVDA
curl "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NVDA&outputsize=compact&apikey=YOUR_KEY"

# RSI (14-period)
curl "https://www.alphavantage.co/query?function=RSI&symbol=NVDA&interval=daily&time_period=14&series_type=close&apikey=YOUR_KEY"

# MACD (12,26,9)
curl "https://www.alphavantage.co/query?function=MACD&symbol=NVDA&interval=daily&series_type=close&fastperiod=12&slowperiod=26&signalperiod=9&apikey=YOUR_KEY"

# EMA (21-period)
curl "https://www.alphavantage.co/query?function=EMA&symbol=NVDA&interval=daily&time_period=21&series_type=close&apikey=YOUR_KEY"

# Bollinger Bands (20,2)
curl "https://www.alphavantage.co/query?function=BBANDS&symbol=NVDA&interval=daily&time_period=20&series_type=close&nbdevup=2&nbdevdn=2&apikey=YOUR_KEY"

# ADX (14-period)
curl "https://www.alphavantage.co/query?function=ADX&symbol=NVDA&interval=daily&time_period=14&apikey=YOUR_KEY"

# ATR (14-period)
curl "https://www.alphavantage.co/query?function=ATR&symbol=NVDA&interval=daily&time_period=14&apikey=YOUR_KEY"
```

- **Limitations:** 25 calls/day is tight. Prioritize: daily candles + RSI + MACD for top watchlist names.
  Cache responses locally. Don't waste calls on redundant queries.

## 7.2 Finnhub

- **Tier:** Free
- **API Key:** `d6frbcpr01qqnmbpo9sgd6frbcpr01qqnmbpo9t0`
- **Rate Limits:** 60 API calls/minute
- **Data Available:** Real-time quotes, company profiles, earnings calendar, analyst recommendations,
  insider transactions, social sentiment

**Curl Examples:**

```bash
# Real-time quote for NVDA
curl "https://finnhub.io/api/v1/quote?symbol=NVDA&token=d6frbcpr01qqnmbpo9sgd6frbcpr01qqnmbpo9t0"

# Earnings calendar (next 7 days)
curl "https://finnhub.io/api/v1/calendar/earnings?from=2026-02-28&to=2026-03-07&token=d6frbcpr01qqnmbpo9sgd6frbcpr01qqnmbpo9t0"

# Company profile
curl "https://finnhub.io/api/v1/stock/profile2?symbol=NVDA&token=d6frbcpr01qqnmbpo9sgd6frbcpr01qqnmbpo9t0"

# Analyst recommendations
curl "https://finnhub.io/api/v1/stock/recommendation?symbol=NVDA&token=d6frbcpr01qqnmbpo9sgd6frbcpr01qqnmbpo9t0"

# Insider transactions
curl "https://finnhub.io/api/v1/stock/insider-transactions?symbol=NVDA&token=d6frbcpr01qqnmbpo9sgd6frbcpr01qqnmbpo9t0"

# Social sentiment (Reddit/Twitter)
curl "https://finnhub.io/api/v1/stock/social-sentiment?symbol=NVDA&token=d6frbcpr01qqnmbpo9sgd6frbcpr01qqnmbpo9t0"
```

- **Best use:** Real-time quotes (60/min is generous), earnings calendar for Rule E1 screening,
  insider transactions for conviction.

## 7.3 Brave Search API

- **API Key:** `BSAcbrLXkJ1m6XeZSHufp4KvcbZZzMs`
- **Use Cases:** News sentiment analysis, Reddit trending stocks, catalyst discovery
- **Rate Limits:** 2,000 queries/month on free tier

**Curl Examples:**

```bash
# Search for NVDA news sentiment
curl -H "X-Subscription-Token: BSAcbrLXkJ1m6XeZSHufp4KvcbZZzMs" \
  "https://api.search.brave.com/res/v1/web/search?q=NVDA+stock+news+today&count=5"

# Search Reddit for trending stocks
curl -H "X-Subscription-Token: BSAcbrLXkJ1m6XeZSHufp4KvcbZZzMs" \
  "https://api.search.brave.com/res/v1/web/search?q=site:reddit.com+wallstreetbets+trending+stocks&count=5"

# Search for macro news
curl -H "X-Subscription-Token: BSAcbrLXkJ1m6XeZSHufp4KvcbZZzMs" \
  "https://api.search.brave.com/res/v1/web/search?q=CPI+inflation+data+latest&count=5"
```

## 7.4 Free APIs (No Key Required)

**Fear & Greed Index (CNN):**
```bash
curl "https://api.alternative.me/fng/?limit=1"
# Returns: { "value": "72", "value_classification": "Greed" }
```

**Crypto Fear & Greed:**
```bash
curl "https://api.alternative.me/fng/?limit=1"
# Same API covers crypto fear/greed
```

**CoinGecko (Crypto prices):**
```bash
# BTC price
curl "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true"

# BTC dominance
curl "https://api.coingecko.com/api/v3/global"
# Look for: data.market_cap_percentage.btc
```

**Yahoo Finance (unofficial — for backup):**
```bash
# Basic quote (no API key, but rate limited/unreliable)
curl "https://query1.finance.yahoo.com/v8/finance/chart/NVDA?interval=1d&range=5d"
```

---

# PART 8: SCORING RUBRIC

Every trade gets scored across 5 dimensions, 0-2 points each. Maximum score = 10.
Minimum score to trade: 8 (momentum holds), 9 (short-term trades).

---

## Dimension 1: Technical Setup (0-2)

| Score | Criteria |
|-------|----------|
| 0 | MAs misaligned (price below 50 or 200 SMA), MACD bearish, no pattern, low volume |
| 1 | Some MAs aligned, MACD neutral/turning, decent volume, partial pattern |
| 2 | Full MA alignment (9>21>50>200), MACD bullish crossover, volume surge, clear pattern |

- **Holy Grail setup (ADX > 30 + pullback to 20 EMA) = automatic 2/2**
- **Minervini Stage 2 checklist all true = +1 minimum**
- **Below 200 SMA = maximum 1/2 (PTJ filter applies)**
- Elder Triple Screen weekly trend against you = cap at 0/2

## Dimension 2: Macro/Sentiment (0-2)

| Score | Criteria |
|-------|----------|
| 0 | VIX > 30 (without contrarian setup), Fed hawkish, sector lagging, VAMS bearish |
| 1 | VIX 15-25, Fed neutral, sector neutral, VAMS neutral |
| 2 | VIX < 20, Fed dovish, sector leading, VAMS bullish, Fear/Greed not extreme |

- **42 Macro VAMS adjustments:**
  - VAMS Bullish: +0.5 to this dimension
  - VAMS Neutral: +0.25
  - VAMS Bearish: -0.5
- **Dr. Mo adjustments:**
  - Max Position signal: +0.25
  - No Position signal: -0.5
- **CRITICAL OVERRIDE:** If VAMS = Bearish AND Dr. Mo = No Position → AUTO-CAP this dimension at 0.
  No exceptions. Both models agreeing on caution = sit on hands.
- **VIX > 30 + Put/Call > 1.0 = contrarian override: this becomes +1 (buying fear)**

## Dimension 3: Risk/Reward (0-2)

| Score | Criteria |
|-------|----------|
| 0 | R:R < 1.5:1 or no clear stop/target |
| 1 | R:R 1.5:1 to 2.5:1 with clear stop and target |
| 2 | R:R ≥ 3:1 (momentum holds) or ≥ 2:1 (short-term) with defined stop and logical target |

- **Momentum holds REQUIRE R:R ≥ 3:1 for a score of 2**
- **Short-term trades REQUIRE R:R ≥ 2:1 for a score of 2**
- **Stop must be defined BEFORE entry** (Kovner Rule 4)
- **Three scenarios must be planned:** bull case, base case, bear case
- Must know exactly where you'll exit in each scenario

## Dimension 4: Catalyst (0-2)

| Score | Criteria |
|-------|----------|
| 0 | No identifiable catalyst. Just "it looks good on the chart." |
| 1 | Mild catalyst: sector tailwind, general positive sentiment, upcoming earnings (but not within 3 days) |
| 2 | Strong catalyst: earnings beat (recent), analyst upgrade, insider buying, new product, regulatory win |

- **"Both Lights Green" Rule (Michael Marcus, Rule 6):**
  - Technical Setup AND Catalyst must BOTH score > 0.
  - If Technical = 2 but Catalyst = 0 → NO TRADE. Needs both lights green.
  - If Catalyst = 2 but Technical = 0 → NO TRADE. Same rule.
  - This eliminates "great chart, no reason" and "great story, bad chart" trades.
- **Options flow as catalyst:** Unusual options activity (large call sweeps) = +0.5 to catalyst.
- **Insider buying** within last 30 days = +0.5 to catalyst.

## Dimension 5: Timing (0-2)

| Score | Criteria |
|-------|----------|
| 0 | Chasing (extended move), buying into resistance, high volume on entry candle (climax) |
| 1 | Decent entry but not ideal — slightly extended, volume okay, near support |
| 2 | At support, volume drying up (base), breakout from consolidation, pullback to MA in uptrend |

- **Jim Rogers "Money Lying in the Corner" Test (Rule 7):**
  - Ask: "Is this an obvious, easy setup that requires no forcing?"
  - If you have to convince yourself → it's not money lying in the corner → Timing = 0.
  - The best trades feel almost too easy. You see it and know immediately.
- **Chasing = automatic 0/2.** If the stock is already up 10% from the breakout, you missed it.
  Wait for a pullback or find the next setup.
- **Volume dry-up on pullback** = high timing score (sellers exhausted, breakout imminent).
- **Within 3 days of earnings** = 0/2 for Timing (Rule E1). Binary risk.

## Decision Matrix

| Trade Type | Min Score | R:R Required | Hold Period | Stop Strategy | Exit Signal |
|-----------|-----------|-------------|------------|---------------|-------------|
| Momentum Hold | ≥ 8 | ≥ 3:1 | 2-6 weeks | Trail 21 EMA | Daily close below 21 EMA, or VAMS flips |
| Short-Term | ≥ 9 | ≥ 2:1 | 2-10 days | Hard stop (2×ATR) | Hit target, or time stop (5 days) |
| NO TRADE | < 8 | — | — | — | Do not enter |

- **Losers die in 2-5 days regardless of score.** If it's not working, exit.
- **Score < 8 → no trade, ever.** Discipline is the edge.
- **Momentum holds exit when VAMS flips** (from bullish to bearish/neutral for that asset class).

---

## Confirmation Score (0 to +1.0)

After scoring the 5 base dimensions (0-10), apply a Confirmation Score based on how many
independent data sources confirm or contradict the trade thesis.

### Confirmation Sources (each counts as +1)

| # | Source | Confirms When |
|---|--------|--------------|
| 1 | **VAMS** | Bullish signal for that asset class |
| 2 | **Insider buying** | C-suite buys >$100K in last 30 days |
| 3 | **Analyst consensus** | >75% bullish AND recent upgrades |
| 4 | **Google Trends** | Search interest rising >30% in 24h for ticker/sector |
| 5 | **Reddit momentum** | ApeWisdom rank improved >5 spots in 24h |
| 6 | **Fear & Greed contrarian** | Index <20 (extreme fear) for longs, or >80 for shorts |
| 7 | **Congress buying** | Congressional members buying same ticker/sector |
| 8 | **Yahoo trending** | Ticker appearing in Yahoo Finance trending |
| 9 | **Earnings tailwind** | Recent beat + upward revisions (not within 3 days) |
| 10 | **Sector rotation** | Google Trends showing attention shifting INTO this sector |

### Contradiction Sources (each removes 1 confirmation)

- VAMS Bearish for that asset class
- Insider selling >$500K
- Google Trends: search interest dropping >30% for ticker
- Reddit fading: ApeWisdom rank dropped >5 spots
- Congress selling same ticker
- Earnings headwind: within 3 days of report (binary uncertainty)

### Confirmation → Bonus Mapping

| Net Confirmations | Bonus | Interpretation |
|-------------------|-------|---------------|
| 0-1 | +0.0 | Single-source thesis, no extra conviction |
| 2-3 | +0.25 | Moderate multi-source confirmation |
| 4-5 | +0.50 | Strong confirmation — high conviction |
| 6+ | +1.0 | Maximum — rare, everything aligns |

**Final Score = Base (0-10) + Confirmation Bonus (0-1.0)**

### Attention Lifecycle (feeds into Timing dimension)

Track where a stock is in the retail attention cycle using Google Trends + Reddit:

| Phase | Google Trends | Reddit (ApeWisdom) | Timing Adjustment |
|-------|--------------|---------------------|-------------------|
| **1. Discovery** | Rising from near-0, breakout searches | Not in top 30 yet | +0.5 to Timing (best entry) |
| **2. Early Momentum** | Steady increase, related searches growing | Entering top 30, rank rising | +0.0 (no penalty) |
| **3. Peak Attention** | Spiking >50% in 24h, mainstream | Top 10, high upvote ratio | -0.5 to Timing (crowding risk) |
| **4. Fading** | Dropping >30% in 24h | Rank falling >5 spots | -1.0 to Timing (avoid new entries) |

### Smart Money vs Retail Divergence

When institutional signals (insiders, congress) and retail signals (Reddit, Google Trends) disagree:

| Smart Money | Retail | Signal | Score Impact |
|-------------|--------|--------|-------------|
| Buying | Selling/Fading | **STRONG BUY** | +0.5 bonus to Catalyst |
| Selling | Buying/Surging | **STRONG SELL** | -0.5 to Catalyst |
| Both buying | Both buying | Confirmation | Normal (use confirmation count) |
| Both absent | Both absent | No signal | No adjustment |

## Updated Decision Matrix

| Trade Type | Min Score | R:R Required | Hold Period | Max Position |
|-----------|-----------|-------------|------------|-------------|
| Momentum Hold | ≥ 8.0 | ≥ 3:1 | 2-6 weeks | 25% of capital ($2,500) |
| Short-Term | ≥ 9.0 | ≥ 2:1 | 2-10 days | 25% of capital ($2,500) |
| **MAX CONVICTION** | **≥ 9.5** | **≥ 2:1** | **Per setup** | **30% of capital ($3,000)** |
| NO TRADE | < 8.0 | — | — | — |

**MAX CONVICTION** tier: When base score ≥9 AND confirmation bonus ≥+0.5 (total ≥9.5).
These are rare (2-3 per quarter). Everything aligns — technicals, macro, insiders, retail attention.
Allowed to size up to 30% but all other rules still apply (stop loss, trailing, etc.)

### Briefing Display Format

```
🎯 TICKER — Score: X.X/10 (base + confirmation)
├─ Technical: X/2
├─ Macro:     X/2
├─ R:R:       X/2
├─ Catalyst:  X/2
├─ Timing:    X/2 (Phase X attention)
├─ Confirmation: +X.XX (N confirm, N contradict = net N)
│  ✅ source ✅ source ❌ source
└─ Divergence: [None / Smart>Retail / Retail>Smart]
```

---

# PART 9: MARKET WIZARDS INTEGRATION

Fifteen rules distilled from the greatest traders in history.
These override technical analysis when there's a conflict.

---

## Rule 1: Cut Losses Fast, Let Winners Run
**Source:** Ed Seykota — "The elements of good trading are: 1) cut losses, 2) cut losses, 3) cut losses."

- Asymmetric holding periods: losers get 2-5 days. Winners get 2-6 WEEKS.
- Never hold a loser hoping it comes back. The math doesn't work (Recovery Math, Rule M5).
- Winners that are working = let them run with trailing 21 EMA stop.
- This is the single most important rule. Everything else is secondary.

## Rule 2: Never Average Down
**Source:** Paul Tudor Jones — "Losers average losers."

- If your entry was wrong, adding more capital makes it MORE wrong, not less.
- Averaging down = doubling your risk on a failing thesis.
- Exception: NONE. There is no exception to this rule.
- If you want more of a stock, wait for it to prove you right first (Rule 9).

## Rule 3: 200 MA Filter
**Source:** Paul Tudor Jones — "Nothing good happens below the 200-day."

- If price is BELOW the 200 SMA → need 9+ score to enter any long trade.
- This one filter eliminates most catastrophic trades.
- In a bear market, even "great setups" tend to fail because the tide is against you.
- Check the 200 SMA on SPY/QQQ too — if the INDEX is below 200 SMA, reduce all activity.

## Rule 4: Know Your Exit Before Entry
**Source:** Bruce Kovner — "I know where I'm getting out before I get in."

- Before EVERY trade, define three scenarios:
  - **Bull case:** What happens if everything goes right? Target? Trail stop?
  - **Base case:** What happens if it just meanders? Time stop after 5 days.
  - **Bear case:** What happens if it fails? Hard stop at 2×ATR. Max loss = $300.
- If you can't clearly define all three → don't enter the trade.
- Write it down. The act of writing forces clarity.

## Rule 5: ATR-Based Position Sizing
**Source:** Richard Dennis (Turtle Traders) — "Trade small enough to survive bad streaks."

- Position size = $300 / (2 × ATR in dollars)
- Cap at $2,500 per position regardless of ATR calculation
- Never increase position size after a loss (no revenge trading)
- Only increase position size when overall portfolio grows (recalculate 1R quarterly)
- See Part 5.1 for full formula and examples.

## Rule 6: "Both Lights Green"
**Source:** Michael Marcus — "When both the technicals and fundamentals agree, that's when you get the big moves."

- Technical Setup score must be > 0 AND Catalyst score must be > 0.
- One without the other → no trade.
- Great chart + no catalyst = "What's going to make it move?"
- Great catalyst + bad chart = "The market already knows, and it doesn't care."
- Both green = institutional conviction + momentum. That's where the big moves are.

## Rule 7: "Money Lying in the Corner"
**Source:** Jim Rogers — "I just wait until there is money lying in the corner, and all I have to do is go over there and pick it up."

- Anti-FOMO filter. If you have to chase → it's not your trade.
- The best trades are OBVIOUS. They don't require convincing.
- If you're spending 20 minutes justifying why a trade might work → skip it.
- Patience is an edge. Most of trading is waiting. Those who wait for the perfect setup
  outperform those who trade every wiggle.

## Rule 8: Holy Grail Setup
**Source:** Linda Raschke — "When ADX is above 30 and price pulls back to the 20 EMA..."

- ADX > 30 = strong trend confirmed by the market itself
- Pullback to 20 EMA = healthy retracement within a strong trend
- Buy the pullback with stop below 20 EMA minus 1×ATR
- Win rate: 55.6% with trailing stop (backtested)
- This is Edge #6 in our system — highest win rate technical setup.
- Auto 2/2 on Technical Setup score.

## Rule 9: Add to Winners at +1R
**Source:** Ed Seykota — "I ride my winners."

- Once a trade is profitable by +1R ($300), you MAY add to the position.
- Adding conditions:
  - Original thesis still intact
  - Score would still be ≥ 8 if entering fresh today
  - Total position doesn't exceed $2,500
  - Total portfolio risk doesn't exceed 9%
- Move stop on original position to breakeven before adding.
- This is how small positions become big winners — pyramiding into strength.

## Rule 10: Max 2 Positions Per Sector
**Source:** Portfolio management best practice.

- Even if AI/semiconductor has 5 great setups → max 2 positions.
- Concentration risk kills. If the sector rotates, you lose on both.
- Forces diversification across sectors.
- Combined with Rule C1 (max 0.7 correlation) → true diversification.

## Rule 11: Let Winners Run Past 10 Days
**Source:** Composite — trend following philosophy.

- Short-term trades have a 10-day natural evaluation point.
- If after 10 days the trade is profitable AND trend is intact (above 21 EMA, MACD bullish) →
  DO NOT cut it. Switch from short-term to momentum hold.
- Trail with 21 EMA and let it run.
- Some of the biggest gains come from trades that were meant to be short-term
  but turned into multi-week runners. Don't cut flowers to water weeds.

## Rule 12: 3-Strike Soft Stop
**Source:** Ed Seykota — risk management philosophy.

- Three consecutive -1R losses = pause trading for 24 hours.
- Review what went wrong. Were the setups valid? Was execution clean?
- If setups were valid but just didn't work → bad luck. Resume after 24h.
- If setups were questionable → tighten criteria. Maybe raise threshold to 9+ for all trades.
- Three strikes doesn't mean you're out — it means you step back and reassess.

## Rule 13: 5:1 R:R Target for A+ Setups
**Source:** Paul Tudor Jones — "I look for a 5:1 reward to risk."

- A+ setups (score = 10, perfect alignment) should target 5:1 R:R.
- $300 risk → $1,500 target.
- Trail stop ONLY. Do not take a fixed target on A+ setups. Let them run.
- These are rare — maybe 1-2 per month. But they make the year.
- Even PTJ says most of his yearly profits come from a handful of trades.

## Rule 14: Trade the Reaction, Not the Event
**Source:** Market wisdom.

- For binary events (earnings, CPI, FOMC, FDA) → don't bet on the event outcome.
- Wait for the EVENT to happen, then trade the REACTION.
- Example: CPI comes in hot. Stocks drop. Wait for the dust to settle (24-48h).
  Then look for oversold bounces (Edge #2) or continuation patterns.
- Rule E1 enforces this: no entries within 3 days of earnings = forcing you to trade the reaction.

## Rule 15: Psychology > Strategy
**Source:** All Market Wizards agree — the psychological edge matters more.

- We have no emotions. That's our edge.
- An AI doesn't feel FOMO. Doesn't revenge trade. Doesn't get attached to positions.
- Doesn't average down because of hope. Doesn't cut winners because of fear.
- Execute the system mechanically. The rules are the strategy. Follow them.
- When a human overrides the system based on "gut feel" → that's when losses compound.
- Trust the scoring. Trust the rules. Execute.

---

# PART 10: 42 MACRO INTEGRATION

42 Macro (Darius Dale) provides institutional-grade macro analysis that overlays our technical system.
VAMS is the #1 filter for all trades.

---

## M1: Macro Regime Check

Before every trade, identify the current macro regime:

| Regime | Growth | Inflation | Best Sectors | Worst Sectors |
|--------|--------|-----------|-------------|---------------|
| Goldilocks | Rising | Falling | Tech, Growth, Discretionary | Defensive, Utilities |
| Reflation | Rising | Rising | Commodities, Industrials, Value | Bonds, Growth |
| Inflation | Falling | Rising | Energy, Commodities, Cash | Growth, Tech, Bonds |
| Deflation | Falling | Falling | Bonds, Utilities, Cash | Everything else |

- **Current regime assessment affects every trade.**
- In Goldilocks (current lean) → full speed ahead on growth/tech/momentum.
- In Inflation/Deflation → reduce position sizes, focus on defensive/commodities.
- Check weekly. Regime changes happen slowly (over months, not days).

## M2: VAMS Override — THE #1 FILTER

**VAMS = Volatility-Adjusted Momentum Signal**

- This is the MOST IMPORTANT filter in the entire system.
- VAMS hierarchy: it overrides everything else.

| VAMS Signal | Score Threshold | Position Sizing | Notes |
|------------|----------------|-----------------|-------|
| Bullish | Standard (≥ 8 momentum, ≥ 9 short-term) | Full ($2,500 max) | Go time |
| Neutral | Need ≥ 8 for ALL trades | Reduce to $2,000 max | Cautious |
| Bearish | Need ≥ 9 for ALL trades | Reduce to $1,500 max | Very selective |

- VAMS Bearish + Dr. Mo No Position → AUTO-CAP Macro/Sentiment at 0. Effectively makes
  it nearly impossible to reach score ≥ 9. This is BY DESIGN.
- **Exit rule:** If VAMS flips from Bullish to Bearish on an asset class you're holding →
  begin exiting within 2 trading days. Don't wait for the trailing stop.

## M3: Strategic Gold Allocation

- 42 Macro has been structurally bullish on gold.
- Gold/Silver = hedge against monetary debasement, inflation, geopolitical risk.
- **Current signal: Gold/Silver/GDX BULLISH.**
- This means gold-related positions (GLD, SLV, GDX, NEM, GOLD) get a +0.5 boost
  to Macro/Sentiment score.
- Consider a 5-10% strategic allocation to gold as a portfolio hedge.

## M4: Crowding Model Filter

- 42 Macro tracks crowded trades (where everyone is positioned the same way).
- Crowded trades are vulnerable to rapid reversals.
- If a trade is flagged as "crowded" by institutional positioning data → reduce size by 50%
  OR require score ≥ 9 to enter.
- Crowding examples: long Mag 7, short bonds, long dollar — these get crowded cyclically.
- When the crowd unwinds → the move is violent. Don't be the last one holding.

## M5: Recovery Math

- Already detailed in Part 5.3, but the 42 Macro framing:
  - A 50% drawdown requires a 100% gain to recover. This is NOT theoretical.
  - It takes TWICE as long to recover a drawdown as it took to experience it.
  - Prevention > cure. Cut losses fast (Rule 1).
  - Our 3% max risk per trade and 10% drawdown pause rule protect against this.

## M6: Volatility Drag

- Also covered in Part 5.3, but the 42 Macro emphasis:
  - Volatility itself is a cost, even if you're "right" on direction.
  - A portfolio that returns +20%, -15%, +20%, -15% underperforms one returning +5%, +5%, +5%, +5%.
  - Smoother equity curves compound better.
  - This is why we cap positions, maintain cash reserves, and use stops.

## M7: Sector Rotation in Current Regime

- **Current regime: Goldilocks lean (growth rising, inflation falling)**
- Goldilocks playbook: full speed risk-on.
  - Overweight: Tech (NVDA, AVGO, MSFT), Growth, AI/Semi
  - Neutral: Industrials, Healthcare
  - Underweight: Utilities, Consumer Staples, Energy
- **Current 42 Macro signals (per asset class):**
  - Gold/Silver/GDX: **BULLISH** → overweight, +0.5 to Macro/Sentiment
  - SPY/QQQ/IWM: **BULLISH** → full speed equities
  - BTC/ETH: **BEARISH** → avoid new crypto positions, reduce size on existing
  - USD (DXY): **BEARISH** → supports commodities, gold, international
  - VIX: **BULLISH (vol rising)** → tighten stops, reduce position sizes
  - XLK (Tech): **NEUTRAL** → standard scoring, no boost or penalty

## VAMS Hierarchy — How It All Flows

```
TRADE IDEA
    ↓
[1] VAMS Check → Bearish? Need 9+ score. Bullish? Standard.
    ↓
[2] Dr. Mo Check → No Position? -0.5 Macro. VAMS Bearish + Dr. Mo No Position → Cap Macro at 0.
    ↓
[3] Macro Regime → Goldilocks/Reflation? Green light. Inflation/Deflation? Amber.
    ↓
[4] Asset Class Signal → BULLISH/BEARISH/NEUTRAL per 42 Macro
    ↓
[5] Score the trade → 5 dimensions, 0-2 each
    ↓
[6] Decision → Score ≥ threshold? R:R ≥ requirement? Both Lights Green?
    ↓
[7] Execute or PASS
```

---

# PART 11: OPTIONS OVERLAY

For the real-money phase (after 3 months paper trading). Options add a layer of defined risk
and leverage efficiency. Not for paper trading phase.

---

## 11.1 Protective Puts on Momentum Holds

- **When:** Holding a momentum position (2-6 weeks) through a known risk event
  (CPI, FOMC, earnings of a correlated stock).
- **Strategy:** Buy a put option 1-2 strikes below current price, 30-45 DTE.
- **Cost:** Typically 1-3% of position value. This is insurance.
- **Example — IGV at $90:**
  - Buy $87 put, 30 DTE, cost ~$1.50 ($150 per contract)
  - If IGV drops to $80, put is worth $7.00 ($700). Net loss on stock: $10 × 100 = $1,000.
    Put gain: $550. Net loss reduced to $450 instead of $1,000.
  - If IGV goes to $100, put expires worthless. Cost: $150 (insurance premium).
  - **Decision:** Only buy protection when the cost is < 0.5R ($150) and the event risk is significant.

## 11.2 Call Spreads to Define Max Risk

- **When:** Bullish on a stock but want to define maximum risk precisely.
- **Strategy:** Buy a call at-the-money (ATM), sell a call out-of-the-money (OTM).
  Max loss = net debit. Max gain = spread width minus net debit.
- **Example — NVDA at $900:**
  - Buy $900 call, 45 DTE, cost $45 ($4,500 per contract) — TOO EXPENSIVE as a straight call.
  - Buy $900 / Sell $950 call spread, 45 DTE, net debit $18 ($1,800). Max gain = $50 - $18 = $32 ($3,200).
  - R:R = $3,200 / $1,800 = 1.78:1. Not great. Need to find tighter spreads for better R:R.
  - Better: Buy $910 / Sell $930 call spread. Net debit $8 ($800). Max gain = $12 ($1,200). R:R = 1.5:1.
  - **Or even better:** Use options when IV is low (after a squeeze, before expected move).

## 11.3 When to Use Options vs. Straight Equity

| Scenario | Use Options | Use Equity |
|----------|------------|-----------|
| High-priced stock ($500+) | ✅ Can't buy enough shares within $2,500 | ❌ Only 5 shares |
| Binary event protection | ✅ Protective puts | ❌ No protection |
| Defined risk needed | ✅ Spreads cap max loss | ❌ Gaps can exceed stops |
| Small account ($10K) | ⚠️ Only if position sized correctly | ✅ Simpler, no decay |
| Long hold (6+ weeks) | ❌ Time decay eats you | ✅ No theta decay |
| Short-term (2-10 days) | ✅ Leverage without excess capital | ✅ Also works |

- **General rule:** In paper trading phase, use equity. In real-money phase, add options
  for high-priced stocks and defined-risk situations.

## 11.4 IGV (iShares Expanded Tech-Software ETF) — Example Scenarios

**Why IGV?** Software/SaaS ETF. Less volatile than individual tech stocks. Good for
practicing options strategies with more predictable behavior.

**Scenario A — Bullish Momentum Hold:**
- IGV at $85, VAMS bullish, technical setup score 2/2
- Buy 100 shares at $85 ($8,500 → exceeds position limit)
- Instead: Buy $85 call, 45 DTE, cost $3.50 ($350). Risk = $350 (1.17R). Acceptable.
- Trail the option by selling when delta drops below 0.30.

**Scenario B — Earnings Protection:**
- Holding IGV through MSFT/GOOGL earnings (they're big components)
- Buy $83 put, 14 DTE, cost $1.20 ($120). Insurance for ~$120.
- If IGV gaps down 5% ($80.75), put worth $2.25. Offsets ~$225 of $425 stock loss.

**Scenario C — Defined Risk Breakout:**
- IGV breaking out of base at $88. Want to participate but cap risk.
- Buy $88/$93 call spread, 30 DTE, net debit $2.00 ($200). Max gain $300. R:R = 1.5:1.
- Worse R:R than equity with a stop, but DEFINED — no gap risk.

---

# ADDITIONAL RULES

Appended rules that don't fit neatly into one section but are MANDATORY.

---

## Rule E1: No Entries Within 3 Days of Earnings

- Earnings are binary events. The outcome is unknowable.
- Even with great analysis, earnings can go either way.
- Wait 3 trading days AFTER earnings to enter a position.
- This forces you to "trade the reaction, not the event" (Rule 14).
- Check the Finnhub earnings calendar API before every trade.

## Rule C1: Max 0.7 Correlation Between Positions

- If two positions have correlation > 0.7, they're essentially the same bet.
- Example: NVDA and AMD have ~0.75 correlation. Holding both = concentrated AI/Semi bet.
  If you have NVDA, don't add AMD. Add something uncorrelated (GLD, CAT, UNG).
- Check correlation using 90-day rolling correlation.
- This rule COMBINES with Rule 10 (max 2 per sector) for true diversification.
- Three positions with low correlation = three independent bets = lower portfolio risk.

## Rule EC1: Tighten Stops Before HIGH Impact Economic Events

- **HIGH impact events:** CPI, FOMC rate decision, NFP (non-farm payrolls), PCE, GDP
- **Action:** 24 hours before a high-impact event:
  - Move trailing stops to breakeven or closer (reduce from 2×ATR to 1×ATR)
  - Consider taking partial profits (50% of position)
  - Do NOT enter new positions within 24 hours of the event
  - Wait 24-48 hours after the event for dust to settle before new entries
- **Medium impact events** (PPI, retail sales, housing): Tighten stops but don't exit.
- **Low impact events** (Beige Book, consumer confidence): Normal stops, no action needed.

---

# WATCHLIST

46 tickers organized by sector. These are the universe we scan for setups.
Not every ticker is tradeable at any given time — the scoring system filters.

---

## AI/Semiconductors (7)
| Ticker | Company | Why It's Here |
|--------|---------|--------------|
| NVDA | NVIDIA | AI leader, GPU monopoly, highest momentum |
| AVGO | Broadcom | AI networking, custom chips, diversified semi |
| MRVL | Marvell Technology | Data center, custom silicon, AI infrastructure |
| AMD | Advanced Micro Devices | GPU competition, data center growth |
| TSM | Taiwan Semiconductor | Foundry monopoly, makes everyone's chips |
| ARM | ARM Holdings | IP licensing, mobile/AI architecture |
| SMCI | Super Micro Computer | AI server infrastructure, volatile but high-beta |

## Big Tech (6)
| Ticker | Company | Why It's Here |
|--------|---------|--------------|
| MSFT | Microsoft | Cloud (Azure), AI (Copilot/OpenAI), enterprise |
| GOOGL | Alphabet | Search monopoly, cloud, AI (Gemini), undervalued |
| META | Meta Platforms | Social monopoly, AI investment, Reels growth |
| AMZN | Amazon | AWS dominance, retail, AI infrastructure |
| AAPL | Apple | Ecosystem, services growth, AI integration |
| PLTR | Palantir | Government AI, data analytics, high-growth |

## Construction (6)
| Ticker | Company | Why It's Here |
|--------|---------|--------------|
| CAT | Caterpillar | Infrastructure spending, tariff beneficiary |
| VMC | Vulcan Materials | Aggregates monopoly, infrastructure bill |
| MLM | Martin Marietta | Aggregates, construction materials |
| DE | Deere & Co | Agriculture + construction equipment |
| URI | United Rentals | Equipment rental, leading indicator for construction |
| BLDR | Builders FirstSource | Residential construction supply |

## Crypto Proxies (4)
| Ticker | Company | Why It's Here |
|--------|---------|--------------|
| MSTR | MicroStrategy | Leveraged BTC play, BTC treasury strategy |
| COIN | Coinbase | Crypto exchange, regulatory clarity play |
| MARA | Marathon Digital | Bitcoin mining, leveraged to BTC price |
| SQ | Block (Square) | Payments + Bitcoin, Cash App |

## ETFs (9)
| Ticker | Focus | Why It's Here |
|--------|-------|--------------|
| SPY | S&P 500 | Market direction, macro plays |
| QQQ | Nasdaq 100 | Tech/growth proxy |
| SMH | Semiconductors | AI/Semi sector plays |
| XLI | Industrials | Infrastructure, construction cycle |
| TLT | 20+ Year Treasury | Rate play, deflation hedge |
| GLD | Gold | Inflation hedge, 42 Macro bullish |
| UUP | US Dollar | DXY proxy, macro indicator |
| IGV | Software/SaaS | Tech sub-sector, options practice |
| IWM | Russell 2000 | Small cap, breadth indicator |
| EEM | Emerging Markets | Global growth play, dollar weakness |

## Homebuilders (4)
| Ticker | Company | Why It's Here |
|--------|---------|--------------|
| DHI | D.R. Horton | Largest homebuilder, rate-sensitive |
| LEN | Lennar | #2 homebuilder, diverse geography |
| KBH | KB Home | West coast focus, millennial demand |
| TOL | Toll Brothers | Luxury segment, higher margins |

## Gold/Silver (4)
| Ticker | Company | Why It's Here |
|--------|---------|--------------|
| SLV | iShares Silver | Silver ETF, industrial + monetary metal |
| NEM | Newmont | Largest gold miner, leverage to gold price |
| GDX | VanEck Gold Miners | Gold miner ETF, leveraged to gold |
| GOLD | Barrick Gold | Major gold miner, dividend |

## Uranium (3)
| Ticker | Company | Why It's Here |
|--------|---------|--------------|
| URA | Global X Uranium | Uranium ETF, nuclear renaissance |
| CCJ | Cameco | Largest uranium producer, supply constrained |
| UUUU | Energy Fuels | Uranium + rare earths, dual catalyst |

## Natural Gas (3)
| Ticker | Company | Why It's Here |
|--------|---------|--------------|
| UNG | US Natural Gas ETF | Direct nat gas exposure |
| LNG | Cheniere Energy | LNG export leader, energy security play |
| EQT | EQT Corporation | Largest US nat gas producer |

---

# DUAL TIMEFRAME FRAMEWORK

The system operates on two timeframes simultaneously. Default is momentum holds.
Short-term trades are opportunistic additions when score ≥ 9.

---

## Default: Momentum Holds (2-6 weeks)

| Parameter | Value |
|-----------|-------|
| Hold Period | 2-6 weeks |
| Score Required | ≥ 8 |
| R:R Required | ≥ 3:1 |
| Stop Strategy | Hard stop → Trail 21 EMA after +1R |
| Exit Trigger | Daily close below 21 EMA, OR VAMS flips bearish |
| Position Size | $2,500 max |
| Max Risk | $300 (1R) |

- This is the bread and butter. Most trades should be momentum holds.
- Trailing 21 EMA lets winners run. Edge #7 backtests prove trailing > fixed targets.
- Exit when VAMS flips = respecting the macro regime. Don't fight the tape.

## Opportunistic: Short-Term Trades (2-10 days)

| Parameter | Value |
|-----------|-------|
| Hold Period | 2-10 days |
| Score Required | ≥ 9 (higher bar) |
| R:R Required | ≥ 2:1 |
| Stop Strategy | Hard stop at 2×ATR, time stop at 5 days |
| Exit Trigger | Hit target, OR time stop, OR stop loss |
| Position Size | $2,500 max |
| Max Risk | $300 (1R) |

- Higher score threshold (9 vs 8) because shorter holding period = less room for error.
- Time stop: if trade isn't working in 5 days, exit regardless of P&L.
- Used for Edges #1 (gap fade), #2 (oversold bounce), #5 (VWAP reclaim).

## Universal Rules (Both Timeframes)

- **$300 max risk per trade (1R).** No exceptions.
- **$2,500 max position size.** No exceptions.
- **25% cash always ($2,500 reserved).** Always have dry powder.
- **Max 3 open positions.** Focus beats diversification at this portfolio size.
- **Losers die in 2-5 days.** No exceptions. Cut and move on.
- **Rule E1:** No entries within 3 days of earnings.
- **Rule C1:** Max 0.7 correlation between positions.
- **Rule EC1:** Tighten stops before CPI/FOMC/NFP/PCE.
- **Both Lights Green:** Technical AND Catalyst must both score > 0.

---

# BACKTEST RESULTS

These are the empirical results that validate our strategies.
Tested on our 44-ticker watchlist using historical data.

---

## Strategy Comparison

| Strategy | Win Rate | Annual Return | Profit Factor | Sharpe | Max DD |
|----------|---------|--------------|--------------|--------|--------|
| Breakout + Trailing Stop | 47.7% | +52.9% | 4.39 | 1.16 | 2.3% |
| Breakout + Fixed 3:1 | 40.4% | +22.8% | 1.83 | — | — |
| Holy Grail + Trailing Stop | 55.6% | +9.2% | 1.94 | — | — |
| Holy Grail + Fixed 3:1 | 54.1% | +7.9% | 1.86 | — | — |

## Key Takeaways

1. **Trailing beats fixed targets EVERYWHERE.** Every single strategy performs better with trailing stops.
   - Breakout: 4.39 PF (trailing) vs 1.83 PF (fixed). 2.4× better.
   - Holy Grail: 1.94 PF (trailing) vs 1.86 PF (fixed). Smaller difference but still better.

2. **Breakout + Trailing is the dominant strategy.**
   - +52.9% annual return with only 2.3% max drawdown. That's exceptional.
   - Profit factor of 4.39 means for every $1 lost, $4.39 gained.
   - Low win rate (47.7%) but MASSIVE average winner. This is trend following in action.

3. **Holy Grail has higher win rate but lower returns.**
   - 55.6% win rate is psychologically easier to trade.
   - But +9.2% annual vs +52.9% annual — Breakout + Trailing is clearly superior.
   - Use Holy Grail for conservative adds when Breakout + Trailing has a losing streak.

4. **Gold/Silver = strongest sector in backtests.**
   - GLD, SLV, GDX, NEM consistently outperformed.
   - This aligns with 42 Macro's structural gold bull thesis (M3).
   - Overweight gold/silver in the portfolio.

5. **Crypto underperforms in backtests.**
   - Higher volatility + correlation breakdowns hurt systematic approaches.
   - Current 42 Macro signal: BTC/ETH BEARISH. Confirms: reduce crypto exposure.
   - Trade crypto with higher thresholds (score ≥ 9) and smaller sizes.

6. **Sharpe ratio of 1.16 (Breakout + Trailing):**
   - Above 1.0 = good risk-adjusted returns.
   - 2.3% max drawdown with 52.9% annual return = exceptional risk-adjusted performance.
   - This is the strategy to prioritize.

## Practical Implication

- **Primary strategy: Edge #7 (Breakout + Trailing Stop)**
  - Lower win rate is psychologically hard. Expect losing streaks of 3-5 trades.
  - But the winners are so large they pay for all the losses and more.
  - Discipline to keep taking the setups = the actual edge.

- **Secondary strategy: Edge #6 (Holy Grail + Trailing Stop)**
  - Higher win rate provides psychological balance.
  - Lower returns but still profitable (profit factor 1.94).
  - Use when Breakout setups are scarce or after a losing streak.

- **Combine both:** Take every valid setup from both edges. The system works because
  you take EVERY valid signal, not just the ones that "feel right."

---

# SYSTEM SUMMARY

```
┌─────────────────────────────────────────────────┐
│           TRADE DECISION FLOWCHART              │
├─────────────────────────────────────────────────┤
│                                                 │
│  1. VAMS Check (42 Macro)                       │
│     → Bearish? Need 9+ score                    │
│     → Neutral? Need 8+                          │
│     → Bullish? Standard thresholds              │
│                                                 │
│  2. 200 SMA Filter (PTJ)                        │
│     → Below 200 SMA? Need 9+ score              │
│                                                 │
│  3. Score the Trade (5 dimensions, 0-2 each)    │
│     [1] Technical Setup                         │
│     [2] Macro/Sentiment                         │
│     [3] Risk/Reward                             │
│     [4] Catalyst                                │
│     [5] Timing                                  │
│                                                 │
│  4. Both Lights Green Check                     │
│     → Technical > 0 AND Catalyst > 0?           │
│     → If either = 0 → NO TRADE                  │
│                                                 │
│  5. Minimum Score Check                         │
│     → Momentum Hold: Score ≥ 8, R:R ≥ 3:1      │
│     → Short-Term: Score ≥ 9, R:R ≥ 2:1         │
│     → Score < 8 → NO TRADE                      │
│                                                 │
│  6. Position Size (ATR method)                  │
│     → Shares = $300 / (2 × ATR)                 │
│     → Cap at $2,500                             │
│     → Check: ≤ 3 positions, ≤ 2/sector          │
│     → Check: correlation < 0.7 with existing    │
│     → Check: 25% cash maintained                │
│                                                 │
│  7. Define Exit BEFORE Entry                    │
│     → Hard stop: 2 × ATR below entry            │
│     → Trail: 21 EMA after +1R                   │
│     → Time stop: 5 days for losers              │
│     → Bull/Base/Bear scenarios                  │
│                                                 │
│  8. EXECUTE                                     │
│                                                 │
│  9. MANAGE                                      │
│     → Losers die in 2-5 days                    │
│     → Winners trail 21 EMA                      │
│     → Add at +1R if thesis holds (Rule 9)       │
│     → Exit when VAMS flips (momentum holds)     │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

> **"The goal is not to be right. The goal is to make money.
> You make money by cutting losses fast and letting winners run.
> Everything else is noise."**
> — Composite wisdom from Market Wizards

---

*Last rebuilt: 2026-02-28*
*Version: 2.0*
*System by: El Hefe × Ice Box*
