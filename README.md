# Default starter for Gridsome

Demo project showing how to create relations between collections with Gridsome and NetlifyCMS. 

See the blog post about it here: [Gridsome + NetlifyCMS Collection Relations](https://jozefm.dev/articles/2019/06/18/gridsome-netlify-cms-collection-relations)

## Running

```bash
npm i

npm run develop
```
## 

## Notes

If you want to customise this for your own project, you will need to adjust the NetlifyCMS config in `src/admin/config.yml` to point to your own repository: 

```yaml
# You will need to change this to point at your own repository
backend:
  name: github
  repo: zefman/gridsome-netlifycms-relations
```