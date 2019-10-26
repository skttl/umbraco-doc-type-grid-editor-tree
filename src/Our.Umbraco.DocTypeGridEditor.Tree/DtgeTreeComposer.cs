using System.Linq;
using Umbraco.Core;
using Umbraco.Core.Composing;

namespace skttl.DtgeTree
{
    public class DtgeTreeComposer : IUserComposer
    {
        public void Compose(Composition composition)
        {
            composition.Register<ManifestRepository>(Lifetime.Singleton);
            composition.Components().Append<DtgeTreeComponent>();
        }
    }
}
