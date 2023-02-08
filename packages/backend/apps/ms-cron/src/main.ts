//import {api} from "ms-tinkoff-investments-v2/packages/backend/apps/api/src/api"

import {api} from "ms-tinkoff-investments-v2/packages/backend/apps/api/src/api";

const exec = async () => {
    const accs = await api.users.getAccounts({})
    console.log(accs);
}
exec();