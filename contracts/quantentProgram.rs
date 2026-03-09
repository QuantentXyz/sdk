use anchor_lang::prelude::*;

declare_id!("Quantent11111111111111111111111111111111");

#[program]
pub mod quantent {
    use super::*;

    pub fn register_agent(ctx: Context<RegisterAgent>, agent_id: String) -> Result<()> {
        let agent = &mut ctx.accounts.agent;
        agent.agent_id = agent_id;
        Ok(())
    }
}

#[account]
pub struct Agent {
    pub agent_id: String,
}

#[derive(Accounts)]
pub struct RegisterAgent<'info> {
    #[account(init, payer = user, space = 64)]
    pub agent: Account<'info, Agent>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}
