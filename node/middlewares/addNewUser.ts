import { json } from 'co-body'
export async function addNewUser(
    ctx: Context,
    next: () => Promise<any>
  ): Promise<void> {
    const {
      clients: { storefrontPermissions },
      req
    } = ctx
    const body = await json(req)
    const {roleId, orgId, costId, name, email} = body
    
    const result = await storefrontPermissions.addUser({
        id:undefined,
        roleId,
        userId:undefined,
        orgId,
        costId,
        name,
        email,
      })
    ctx.status = 200
    ctx.body = result.data
    ctx.set('Cache-Control', 'no-cache')
  
    await next()
  }