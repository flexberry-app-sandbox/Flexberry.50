package 50.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 50.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Метеостанция
 */
@Entity(name = "IIS50Метеостанция")
@Table(schema = "public", name = "Метеостанция")
public class Meteostanciya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Влажность")
    private Double влажность;

    @Column(name = "Долгота")
    private Double долгота;

    @Column(name = "ГородID")
    private Integer городid;

    @Column(name = "ТекущаяТемпа")
    private Double текущаятемпа;

    @Column(name = "Широта")
    private Double широта;

    @Column(name = "Название")
    private String название;

    @Column(name = "IDИдентификатор")
    private Integer idидентификатор;

    @Column(name = "Местоположение")
    private String местоположение;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Gorod")
    @Convert("Gorod")
    @Column(name = "Город", length = 16, unique = true, nullable = false)
    private UUID _gorodid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Gorod", insertable = false, updatable = false)
    private Gorod gorod;


    public Meteostanciya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getВлажность() {
      return влажность;
    }

    public void setВлажность(Double влажность) {
      this.влажность = влажность;
    }

    public Double getДолгота() {
      return долгота;
    }

    public void setДолгота(Double долгота) {
      this.долгота = долгота;
    }

    public Integer getГородID() {
      return городid;
    }

    public void setГородID(Integer городid) {
      this.городid = городid;
    }

    public Double getТекущаяТемпа() {
      return текущаятемпа;
    }

    public void setТекущаяТемпа(Double текущаятемпа) {
      this.текущаятемпа = текущаятемпа;
    }

    public Double getШирота() {
      return широта;
    }

    public void setШирота(Double широта) {
      this.широта = широта;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }

    public Integer getIDИдентификатор() {
      return idидентификатор;
    }

    public void setIDИдентификатор(Integer idидентификатор) {
      this.idидентификатор = idидентификатор;
    }

    public String getМестоположение() {
      return местоположение;
    }

    public void setМестоположение(String местоположение) {
      this.местоположение = местоположение;
    }


}