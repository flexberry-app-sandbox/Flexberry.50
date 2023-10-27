package 50.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 50.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Город
 */
@Entity(name = "IIS50Город")
@Table(schema = "public", name = "Город")
public class Gorod {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Название")
    private String название;

    @Column(name = "Широта")
    private Double широта;

    @Column(name = "IDИдентификатор")
    private Integer idидентификатор;

    @Column(name = "Долгота")
    private Double долгота;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zdanie")
    @Convert("Zdanie")
    @Column(name = "Здание", length = 16, unique = true, nullable = false)
    private UUID _zdanieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zdanie", insertable = false, updatable = false)
    private Zdanie zdanie;


    public Gorod() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }

    public Double getШирота() {
      return широта;
    }

    public void setШирота(Double широта) {
      this.широта = широта;
    }

    public Integer getIDИдентификатор() {
      return idидентификатор;
    }

    public void setIDИдентификатор(Integer idидентификатор) {
      this.idидентификатор = idидентификатор;
    }

    public Double getДолгота() {
      return долгота;
    }

    public void setДолгота(Double долгота) {
      this.долгота = долгота;
    }


}